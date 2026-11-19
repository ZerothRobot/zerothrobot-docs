# Chapter 4: Velocity Kinematics and Statics

> 📌 **Overview**: This chapter extends from "position" to "velocity and force": it analyzes the velocity transfer and force transfer characteristics between links, establishes the velocity kinematics relationship and the Jacobian matrix, discusses singularities during motion, and derives the statics relationship of the robotic arm. Finally, you will practice singularity analysis and end-effector payload estimation on JoyArm.


Chapter 2 determined the end-effector pose from the joint angles, and Chapter 3 solved the joint angles back from a target pose. But when the robotic arm actually moves, knowing only "where" is not enough: as each joint rotates at its current velocity, where will the end effector move, and how fast? Conversely, if you want the end effector to move in a specified direction, how fast should each joint rotate?

This chapter starts by explaining how a single joint drives the end effector, then arranges the velocity contributions of all joints into the Jacobian matrix. This explains why the robotic arm loses motion directions in certain poses, and further answers another practical question: given the force and torque applied at the end effector, how much torque must each joint provide to maintain equilibrium?

## 1 From position change to end-effector velocity

### 1.1 From a pose at one instant to continuous motion

The position forward kinematics established in [Chapter 2](chapt2_fkine.md) gives, for the joint angles at a given instant,

$$
{}^0_e\bm T=f(\bm q)
$$

It describes where the end effector is and which way it faces, given the joint angles $\bm q$ at a certain instant. When the robotic arm moves from a start point to an end point, the joint angles vary continuously with time:

$$
\bm q=\bm q(t)
$$

The rate of change of the joint angles with respect to time is called the **joint velocity**:

$$
\dot{\bm q}
=
\begin{bmatrix}
\dot q_1&\dot q_2&\cdots&\dot q_n
\end{bmatrix}^{\top}
$$

Here, $\dot q_i$ of a revolute joint represents angular velocity, usually in $\mathrm{rad/s}$. What the robotic arm controller actually issues and executes continuously is precisely commands such as position and velocity that vary with time. Therefore, this chapter builds on position forward kinematics to study: what velocity does $\dot{\bm q}$ produce at the end effector?

### 1.2 How a single revolute joint drives the end effector

Suppose the robotic arm has only one link and one revolute joint. Let the joint be located at point $O$ and the end effector at point $P$, and let the joint rotate with angular velocity $\bm\omega$. The end effector does not move along the link direction; it moves along a circular arc centered at $O$, and its linear velocity is

$$
\bm v_P=\bm\omega\times\bm r_{OP}
$$

$\bm r_{OP}$ is the position vector from the joint to the end effector. This expression conveys three intuitive facts:

- The faster the joint rotates, the faster the end effector moves;
- The farther the end effector is from the joint axis, the greater the end-effector velocity produced by the same joint velocity;
- The end-effector velocity direction is perpendicular to both the joint axis and the link direction, that is, along the tangent to the circular arc.

If the joint at point $O$ is also carried along in motion by the preceding links, then the end-effector velocity must additionally include the velocity of point $O$ itself:

$$
\bm v_P
=
\bm v_O
+
\bm\omega\times\bm r_{OP}
$$

Take a human arm as an example: when the shoulder joint moves, it carries the elbow joint along as a whole, and when the elbow joint rotates, it makes the hand continue to move relative to the elbow. The total velocity of the hand is the superposition of these two motions.

### 1.3 How the velocities of multiple joints superimpose

In a serial robotic arm, each joint affects the links and the end effector behind it. Take the planar 2R robotic arm as an example:

- When joint 1 rotates, both links and the end effector are driven;
- When joint 2 rotates, only the second link and the end effector are driven;
- When both joints rotate at the same time, the end-effector velocity equals the superposition of the velocities produced by the two joints.

Therefore, the end-effector velocity can first be written as

$$
\text{end-effector velocity}
=
\text{joint 1 contribution}
+
\text{joint 2 contribution}
+\cdots+
\text{joint $n$ contribution}
$$

A joint's contribution depends not only on the joint velocity but also on the joint axis direction, the distance from the joint to the end effector, and the current pose of the robotic arm. The same set of joint velocities can produce completely different end-effector velocities in different poses.

> 🖼️ **Figure placeholder (Figure 4-1: Superposition of velocity contributions from multiple joints)**: Draw the current configuration using the actual appearance of JoyArm; use thin cyan arrows to represent the end-effector velocity contribution produced by each joint individually, use a thick orange arrow to represent the superposed end-effector linear velocity, and show the angular velocity arc and red, green, and blue coordinate axes at the TCP.

### 1.4 What the end-effector velocity contains

The end effector in space can move along the three directions $x,y,z$ and can also rotate about three directions. Therefore, the end-effector velocity consists of a three-dimensional linear velocity $\bm v$ and a three-dimensional angular velocity $\bm\omega$:

$$
\bm V=
\begin{bmatrix}
\bm v\\
\bm\omega
\end{bmatrix}
$$


Here $\bm V$ is the six-dimensional end-effector velocity, also often called the spatial velocity of the end effector. Note in particular that $\bm v$, $\bm\omega$, the joint axis, and the position vector must be expressed in the same reference frame in order to take part in the same calculation. This chapter consistently uses the base frame to describe these quantities.

This section has shown that the end-effector velocity comes from the superposition of the contributions of each joint. The next section only needs to arrange these contributions in order to obtain the Jacobian matrix that connects joint velocities and end-effector velocities.

---

## 2 The Jacobian matrix and velocity kinematics

### 2.1 Obtaining the Jacobian matrix from joint contributions

The end-effector velocity is the superposition of the contributions of all joints. Denoting the influence of joint $i$ on the end-effector velocity by $\bm J_i$, we have

$$
\bm V
=
\bm J_1\dot q_1
+
\bm J_2\dot q_2
+\cdots+
\bm J_n\dot q_n
$$

Arranging $\bm J_1,\bm J_2,\ldots,\bm J_n$ in order into a matrix:

$$
\bm J(\bm q)
=
\begin{bmatrix}
\bm J_1&\bm J_2&\cdots&\bm J_n
\end{bmatrix}
$$

gives the core relationship of velocity kinematics:

$$
\boxed{
\bm V=\bm J(\bm q)\dot{\bm q}
}
$$

$\bm J(\bm q)$ is the **Jacobian matrix** of the robotic arm. It depends on the current joint angles $\bm q$ and is the conversion relationship from "joint velocity" to "end-effector velocity" in the current pose.

For a robotic arm with $n$ joints, the geometric Jacobian has size $6\times n$:

$$
\bm J
=
\begin{bmatrix}
\bm J_v\\
\bm J_\omega
\end{bmatrix}
$$

Here, the top three rows $\bm J_v$ compute the end-effector linear velocity, and the bottom three rows $\bm J_\omega$ compute the end-effector angular velocity.

### 2.2 What each column of the Jacobian represents

The most important way to understand the Jacobian is not to memorize the matrix elements one by one, but to understand it column by column:

> Column $i$ of the Jacobian, $\bm J_i$, represents the velocity produced at the end effector when only joint $i$ moves at unit velocity and the other joints remain stationary.

Let the axis direction of revolute joint $i$ be $\bm z_{i-1}$, a point on the joint axis be $\bm o_{i-1}$, and the end-effector position be $\bm o_e$. These vectors are all expressed in the base frame. From the rigid-body velocity relationship in the previous section, the Jacobian column corresponding to this joint is

$$
\boxed{
\bm J_i
=
\begin{bmatrix}
\bm z_{i-1}\times(\bm o_e-\bm o_{i-1})\\
\bm z_{i-1}
\end{bmatrix}
}
$$

The upper part describes how the joint rotation moves the end effector, and the lower part describes about which direction the joint makes the end effector rotate. The body joints of JoyArm are all revolute joints, so this formula is mainly used from here on.

<details class="tutorial-details" markdown="1">
<summary>Extension: Jacobian column for a prismatic joint</summary>

If joint $i$ is a prismatic joint, it produces linear velocity directly along the joint axis and no angular velocity, and the corresponding column is

$$
\bm J_i
=
\begin{bmatrix}
\bm z_{i-1}\\
\bm 0
\end{bmatrix}
$$

The Jacobian columns of revolute joints and prismatic joints both answer the same question: when this joint moves alone, what velocity does it add to the end effector?

</details>

> 🖼️ **Figure placeholder (Figure 4-2: Geometric origin of a Jacobian column)**: Highlight one JoyArm revolute joint, mark the joint axis $\bm z_{i-1}$, a point on the axis $\bm o_{i-1}$, the TCP position $\bm o_e$, the position vector $\bm o_e-\bm o_{i-1}$, and the tangential velocity obtained from their cross product; reduce the opacity of the other joints.

### 2.3 Deriving the Jacobian with the planar 2R robotic arm

Chapter 3 already used the planar 2R robotic arm to explain inverse kinematics. Here we continue with the same model to observe how the Jacobian arises from forward kinematics. Let the lengths of the two links be $l_1,l_2$ and the two joint angles be $q_1,q_2$. Differentiating the end-effector position with respect to time and collecting the coefficients of $\dot q_1,\dot q_2$, we finally obtain

$$
\begin{bmatrix}
\dot x\\
\dot y
\end{bmatrix}
=
\underbrace{
\begin{bmatrix}
-l_1\sin q_1-l_2\sin(q_1+q_2)&-l_2\sin(q_1+q_2)\\
l_1\cos q_1+l_2\cos(q_1+q_2)&l_2\cos(q_1+q_2)
\end{bmatrix}
}_{\bm J(\bm q)}
\begin{bmatrix}
\dot q_1\\
\dot q_2
\end{bmatrix}
$$

The first column contains both $l_1$ and $l_2$, because joint 1 drives both links; the second column contains only $l_2$, because joint 2 drives only the second link. The sines and cosines in the matrix show that once the robotic arm pose changes, the effect of the same joint velocity on the end-effector direction also changes.

<details class="tutorial-details" markdown="1">
<summary>Detailed derivation: obtaining the Jacobian from planar 2R forward kinematics</summary>

The end-effector position of the planar 2R robotic arm is

$$
x=l_1\cos q_1+l_2\cos(q_1+q_2)
$$

$$
y=l_1\sin q_1+l_2\sin(q_1+q_2)
$$

When the joint angles vary with time, take the time derivative of each of the two equations:

$$
\dot x
=
\left[-l_1\sin q_1-l_2\sin(q_1+q_2)\right]\dot q_1
-l_2\sin(q_1+q_2)\dot q_2
$$

$$
\dot y
=
\left[l_1\cos q_1+l_2\cos(q_1+q_2)\right]\dot q_1
+l_2\cos(q_1+q_2)\dot q_2
$$

Arranging the coefficients in front of $\dot q_1$ and $\dot q_2$ into a matrix gives the Jacobian above.

</details>

### 2.4 Two ways to construct the Jacobian

The preceding derivations show two common methods.

| Method | Basic idea | Suitable scenario | Use in this chapter |
|:---:|:---:|:---:|:---:|
| Differentiation method | Differentiate the end-effector position or pose relationship with respect to time, and collect the coefficients of each joint velocity | Simple structure, forward kinematics expression easy to expand | See how the Jacobian arises using the planar 2R arm |
| Vector product method | Construct each column directly from the joint axis and the position from the joint to the end effector | Spatial serial robotic arms | Understand the contribution of each JoyArm joint to the end effector |

For a six-DOF robotic arm such as JoyArm, manually expanding the complete forward kinematics and then differentiating it is both tedious and error-prone. Actual projects follow the approach from Chapter 2, "URDF + robotics computation library": the URDF provides the joint axes and link geometry, and Pinocchio then computes the Jacobian of the specified end-effector frame.

The core implementation is located in `joyarm_code/joyarm_core/robotics/jacobian/`. Provide the current joint angles and the target frame when calling it, and you get the $6\times n$ Jacobian in the base reference frame:

```python
J = arm.get_jac(q)
```

The computation here is the geometric Jacobian, with the end-effector velocity arranged as $[\bm v^T,\bm\omega^T]^T$. Hand derivation helps you understand the origin of each column, while programmatic computation is used for the actual robotic arm; both use the same velocity relationship.

#### 2.4.1 A concrete numerical velocity example

Suppose the current joint angles of JoyArm are

$$
\bm q=[-18,-55,-55,-42,-18,22]^T\;{}^\circ
$$

At this point let only joint 1 rotate at $5^\circ/\mathrm{s}$ while the other joints remain stationary:

```python
import numpy as np

q = np.deg2rad([-18, -55, -55, -42, -18, 22])
dq = np.deg2rad([5, 0, 0, 0, 0, 0])

J = arm.get_jac(q)
V = J @ dq
print(V)
```

In the current model and base reference frame, the result is approximately

$$
\bm V=
\begin{bmatrix}
0.00412 & 0.02468 & 0 & 0 & 0 & 0.08727
\end{bmatrix}^{T}
$$

The first three terms represent the TCP linear velocity in $\mathrm{m/s}$; the last three terms represent the angular velocity in $\mathrm{rad/s}$. Joint 1 rotates about the base $z$ axis, so the end effector has an angular velocity in the $z$ direction and produces a tangential linear velocity in the horizontal plane. This result can also be understood directly as: $\bm V$ equals column 1 of the Jacobian multiplied by $5^\circ/\mathrm{s}$.

> 🧭 **Observe in the Demo**: Run `joyarm_code/chapt/chapt4/chapt4_jacobian_demo.py` and select the "Jacobian" mode at the top. The first matrix on the right shows $\bm J_1\sim\bm J_6$ by column; drag $\dot q_1\sim\dot q_6$ separately to observe each term $\bm J_i\dot q_i$ in the second matrix, and the last column "Composite $\bm V$" is the sum of the six column contributions. The real model on the left changes in sync with the end-effector velocity lines, so you can match the first three rows of linear velocity in the matrix to the motion directions in space.

### 2.5 How to find joint velocities from a given end-effector velocity

Given the joint velocities, you can compute the end-effector velocity directly:

$$
\bm V=\bm J\dot{\bm q}
$$

Conversely, if you want the end effector to move at a given velocity $\bm V_{\mathrm d}$, you need to find the joint velocities that satisfy

$$
\bm J\dot{\bm q}=\bm V_{\mathrm d}
$$

When $\bm J$ is square and invertible:

$$
\dot{\bm q}=\bm J^{-1}\bm V_{\mathrm d}
$$

When the Jacobian is not an invertible square matrix, the pseudoinverse is usually used to find a set of joint velocities:

$$
\dot{\bm q}=\bm J^+\bm V_{\mathrm d}
$$

However, this inverse solution cannot be performed stably in all poses. In some poses, the Jacobian loses independent directions, so the robotic arm cannot produce the specified end-effector velocity; this is the singularity discussed in the next section.

> 📌 **The Jacobian is the hub of this chapter**: It connects joint velocities to end-effector velocities in the forward direction and is used to judge singularity in the reverse direction; its transpose also connects end-effector forces to joint torques in Section 4.

---

## 3 Singularity during motion

When the previous section solved for joint velocities from a desired end-effector velocity, it assumed that the robotic arm can produce the required end-effector motion direction in its current pose. But in some special poses, multiple joints may produce identical or interdependent effects on the end effector. At this point the joints can still rotate, yet the end effector loses some instantaneous motion directions; such a pose is called a **singular configuration**.

### 3.1 Understanding singularity with the planar 2R robotic arm

When the two links of the planar 2R robotic arm are fully extended, rotating either joint makes the end effector move in a direction approximately perpendicular to the arm. The velocity magnitudes they produce differ, but the directions are the same. Therefore, the end effector can still move along the tangential direction, but at that instant it cannot continue to extend outward along the arm direction.

This is not because some joint is locked, but because multiple joints produce duplicated motion effects at the end effector. The robotic arm has two rotatable joints, but the end effector can produce linear velocity in only one independent direction at this moment.

Compute the determinant of the 2R Jacobian obtained in Section 2:

$$
\det(\bm J)=l_1l_2\sin q_2
$$

When

$$
q_2=0
\quad\text{or}\quad
q_2=\pi
$$

the two links are fully extended or folded, $\det(\bm J)=0$, and the Jacobian cannot be inverted. This and the loss of motion direction observed above are two expressions of the same thing.

### 3.2 What rank deficiency of the Jacobian means

Each column of the Jacobian represents the contribution of one joint to the end-effector velocity. If some columns repeat a direction, or one column can be obtained as a combination of the other columns, those joints can no longer provide new independent end-effector motion directions. Mathematically this appears as a drop in the rank of the Jacobian:

$$
\operatorname{rank}(\bm J)
<
\operatorname{rank}_{\max}(\bm J)
$$

Therefore, the robotics meaning of singularity is:

> A drop in the rank of the Jacobian means that the robotic arm has lost one or more independent end-effector motion directions in the current configuration.

$\det(\bm J)=0$ can only be used for square matrices. For a non-square Jacobian, or when you need to judge "how far from singularity" the arm is, programs usually use singular values and the condition number:

- The closer the smallest singular value $\sigma_{\min}$ is to 0, the closer the robotic arm is to singularity;
- The larger the condition number $\kappa=\sigma_{\max}/\sigma_{\min}$, the more unstable the inversion of the end-effector velocity;
- At an ideal singular point, $\sigma_{\min}=0$, and the condition number tends to infinity.

The mathematical procedure of singular value decomposition is not elaborated here; it is used only as a computational tool for measuring whether the Jacobian is close to losing independent directions.

### 3.3 Typical singular configurations in robotic arms

The specific singularity conditions of different robotic arms are determined by their joint axis layout, but common phenomena can be grouped into three types.

| Type | Intuitive manifestation | Impact |
|:---:|:---:|:---:|
| Boundary or elbow singularity | The arm is fully extended or folded, and the end effector is near the workspace boundary | The end effector loses the instantaneous motion direction of extending or retracting along the arm |
| Shoulder singularity | The wrist reference point approaches a rotation axis of the shoulder, and some joints act in coincident directions | Some position motions require multiple joints to cooperate at high speed |
| Wrist singularity | Two wrist rotation axes coincide, for example the case $\sin q_5=0$ in Chapter 3 | Two orientation angles cannot be adjusted independently |

These names help you understand the problem from the configuration, while programmatic judgment still relies on the rank, smallest singular value, or condition number of the Jacobian. JoyArm's three consecutive parallel axes and wrist axis layout determine its specific singular poses; you cannot assume that all poses can produce six independent motion directions just because "six joints correspond to six degrees of freedom".

> 🖼️ **Figure placeholder (Figure 4-3: Comparison of typical singular configurations)**: Show JoyArm's boundary or elbow singularity, shoulder singularity, and wrist singularity side by side; highlight the joint axes that coincide or act in related directions, and use gray arrows to mark the instantaneous motion directions lost by the end effector. The specific configurations need to be determined by computation based on the JoyArm model.

### 3.4 What happens near a singularity

In a singular direction, the robotic arm cannot produce the desired end-effector velocity; near a singularity, the solver may make multiple joints move in opposite directions at high speed, so that most of their effects cancel each other out and only a very small resultant end-effector velocity is produced. The result may appear as joint velocities reaching their limits, the robotic arm shaking, the numerical solution failing to converge, or the Cartesian trajectory being interrupted. Therefore, "the formula can still be solved" does not mean the physical robotic arm can necessarily execute it, and the Cartesian space planning in [Chapter 5](chapt5_trajectory.md) also needs to check whether the path approaches a singular region.

### 3.5 How actual programs handle this

Singularity comes from the geometric structure of the robotic arm and cannot be completely eliminated by changing the solution formula. In engineering practice, its impact is usually reduced in three ways:

1. **Avoid singular regions during planning**: monitor the smallest singular value or condition number when generating trajectories, and do not let the path pass through obvious singular configurations;
2. **Limit joint velocities and per-step changes**: avoid mathematical solutions that exceed the actual capability of the motors and controllers;
3. **Use the damped pseudoinverse**: actively reduce joint velocities in unstable directions when approaching a singularity.

The damped pseudoinverse suppresses the amplification of joint velocities in singular directions and makes the motion more stable; the cost is that the end-effector velocity cannot be fully tracked, and the stronger the damping, the larger the tracking error usually is. It can only reduce the instability near a singularity; it cannot change the loss of motion directions caused by the geometric structure of the robotic arm.

<details class="tutorial-details" markdown="1">
<summary>Extension: Damped pseudoinverse formula and parameter effects</summary>

The damped pseudoinverse can be written as

$$
\bm J_\lambda^+
=
\bm J^T
(\bm J\bm J^T+\lambda^2\bm I)^{-1}
$$

where $\lambda$ is the damping coefficient. The ordinary pseudoinverse amplifies the joint velocities corresponding to small singular values, while the damping term limits this amplification. This method has already been used for numerical inverse kinematics in [Section 5 of Chapter 3](chapt3_ikine.md#5). Its detailed derivation involves singular value decomposition, least squares, and regularization.

</details>

> 🧭 **Observe in the Demo**: Select the "Singularity" mode at the top and jump in turn to "Wrist near-singular", "Shoulder near-singular", and "Elbow extended singularity". Focus on comparing four metrics: the smallest singular value decreases, the condition number increases, the joint velocities required by the ordinary pseudoinverse are significantly amplified, while the damped pseudoinverse limits the amplification. After selecting a preset, the Demo fixes the same desired end-effector velocity; continuing to drag the joint angles lets you compare the solution results of the same motion task in different configurations. The exact position where the wrist axes coincide exceeds the hard limits of the current model, so this preset shows a near-singular pose reachable within the soft limits.

---

## 4 Statics relations of the robotic arm

### 4.1 Understanding end-effector load from holding a weight

Suppose JoyArm's gripper holds a heavy object. The object produces a downward force at the end effector, and this force is transmitted through the links to each joint. Even if the robotic arm remains still, the joint motors must provide torque to maintain the current pose.

The torque borne by a joint depends not only on the mass of the object but also on the pose of the robotic arm. For example, when the arm is extended horizontally, the moment arm from the object to the shoulder joint is longer, so the shoulder joint usually needs to provide a larger torque; after the arm is retracted, the moment arm shortens, and the joint torque produced by the same object also changes.

An end-effector load in three-dimensional space can contain forces along three directions and torques about three directions, written together as a six-dimensional generalized force:

$$
\bm F
=
\begin{bmatrix}
\bm f\\
\bm n
\end{bmatrix}
$$

Here $\bm f$ is the end-effector force in newtons and $\bm n$ is the end-effector torque in newton-meters. As with the end-effector velocity, $\bm F$ must also specify its reference frame and point of application. This chapter still uses the base frame consistently and takes the origin of the end-effector frame as the point of application.

### 4.2 Computing joint torques from the end-effector load

In the current configuration, the end-effector generalized force $\bm F$ is mapped through the Jacobian transpose into the force or torque that each joint must bear:

$$
\boxed{
\bm\tau=\bm J^T\bm F
}
$$

For a revolute joint, $\tau_i$ is in newton-meters; for a prismatic joint, the corresponding component represents a force along the joint axis in newtons. In actual use, you only need to ensure that the Jacobian and the end-effector generalized force use the same reference frame and point of application.

<details class="tutorial-details" markdown="1">
<summary>Detailed derivation: obtaining the Jacobian transpose relationship with the principle of virtual work</summary>

Section 2 already gave the velocity relationship

$$
\bm V=\bm J\dot{\bm q}
$$

Taking the time interval very small, it can be written as the corresponding infinitesimal displacement relationship:

$$
\delta\bm x=\bm J\delta\bm q
$$

where $\delta\bm q$ is a set of infinitesimal joint displacements and $\delta\bm x$ is the resulting infinitesimal end-effector displacement. Under ideal static equilibrium, the work done by the joint side and the end-effector side for this infinitesimal motion is equal:

$$
\bm\tau^T\delta\bm q
=
\bm F^T\delta\bm x
$$

Substituting $\delta\bm x=\bm J\delta\bm q$:

$$
\bm\tau^T\delta\bm q
=
\bm F^T\bm J\delta\bm q
=
(\bm J^T\bm F)^T\delta\bm q
$$

This relationship holds for any infinitesimal joint displacement, therefore

$$
\boxed{
\bm\tau=\bm J^T\bm F
}
$$

</details>

> 📌 **Sign convention**: The above equation treats $\bm F$ as the generalized force that the end effector must apply to the outside. If $\bm F_{\mathrm{ext}}$ denotes the external force actually applied by the environment on the robotic arm, then in static equilibrium the motors must provide joint torques in the opposite direction, that is, $\bm\tau_{\mathrm{motor}}=-\bm J^T\bm F_{\mathrm{ext}}$. Engineering calculations must first unify the force direction convention.

> 🖼️ **Figure placeholder (Figure 4-4: End-effector load to joint torque)**: Draw JoyArm holding the same object in the extended and retracted poses; use the same downward external force arrow at the end effector, and represent the required motor torque at each joint with orange arcs of different lengths or shades, so as to visually compare the effect of pose and moment arm on the joint load.

### 4.3 Payload example with the planar 2R robotic arm

Continuing with the planar 2R robotic arm above, the robotic arm moves only in the vertical plane. Suppose the end effector supports an object of mass $m$. To balance gravity, the end effector needs to apply a vertically upward supporting force to the object, ignoring the end-effector torque:

$$
\bm F
=
\begin{bmatrix}
0\\
mg
\end{bmatrix}
$$

where $m$ is the payload mass and $g$ is the gravitational acceleration. Substituting into

$$
\bm\tau=\bm J^T\bm F
$$

gives the joint torques corresponding to the payload:

$$
\tau_1
=
mg\left[l_1\cos q_1+l_2\cos(q_1+q_2)\right]
$$

$$
\tau_2
=
mg\,l_2\cos(q_1+q_2)
$$

Joint 1 must bear the total moment arm formed by the two links, while joint 2 bears only the moment arm of the end effector relative to joint 2. Therefore, in common poses, joints closer to the base usually bear larger payload torques. When the pose of the robotic arm changes, the cosine terms in the equations change accordingly, so the same object causes different joint torques in different poses.

Only the torque caused by the end-effector payload is computed here. The links' own gravity, friction, and inertial effects during motion are not included in this static relationship; they are handled in the dynamics of [Chapter 8](chapt8_dyn.md).

### 4.4 Duality between velocity and statics

The velocity relationship and the static relationship are placed side by side as

$$
\boxed{
\bm V=\bm J\dot{\bm q}
}
\qquad
\boxed{
\bm\tau=\bm J^T\bm F
}
$$

The two describe the transfer of information in opposite directions:

| Relationship | Transfer direction | Question answered |
|:---:|:---:|:---:|
| $\bm V=\bm J\dot{\bm q}$ | Joint velocity $\rightarrow$ end-effector velocity | If the joints move like this, how will the end effector move? |
| $\bm\tau=\bm J^T\bm F$ | End-effector force $\rightarrow$ joint torque | If the end effector bears this load, how much torque must each joint bear? |

<details class="tutorial-details" markdown="1">
<summary>Extension: Estimating the end-effector generalized force from joint torques</summary>

When $\bm J$ is square and full rank, the end-effector generalized force can also be formally solved back from the joint torques:

$$
\bm F=\bm J^{-T}\bm\tau
$$

This inverse relationship has strict preconditions: the joint torques must be produced only by the end-effector load under study, with the effects of link gravity, friction, and inertia already excluded; and $\bm J^{-T}$ does not exist in a singular configuration. Therefore, actual payload analysis usually starts from a known or assumed end-effector load, first computes the joint torques with $\bm\tau=\bm J^T\bm F$, and then compares them with the torque allowed by the motors.

</details>

> 💡 **Duality of velocity and force**: The Jacobian maps joint velocities to end-effector velocities, and the Jacobian transpose maps end-effector forces to joint torques. The same matrix describes both "how the robotic arm moves" and "how it bears load".

> 🧭 **Observe in the Demo**: Select the "Statics" mode at the top and modify $F_x,F_y,F_z,M_x,M_y,M_z$; the table on the right then shows the joint torques produced by the external load, $\bm J^T\bm F_{\mathrm{ext}}$, as well as the opposite motor torques needed to maintain the current pose, $-\bm J^T\bm F_{\mathrm{ext}}$. Keeping the load unchanged and dragging the joint angles lets you directly observe how the load borne by each joint is redistributed after the robotic arm pose changes; when you need to compare hardware capability, expand "Engineering check" to view the maximum torque utilization.

---

## 5 Chapter practice: JoyArm singularity analysis and end-effector payload estimation

Before starting the practice, it is recommended that you first run `joyarm_code/chapt/chapt4/chapt4_jacobian_demo.py` following the "Observe in the Demo" prompts in Sections 2–4, so as to connect the three groups of formulas—velocity mapping, singularity, and statics—to the same JoyArm model. The left side of the interface shows the real URDF/STL appearance through embedded MeshCat; if MeshCat initialization fails, it automatically falls back to the link view, and in a headless environment you can verify the numerical computation with `--headless --case all`.

The practice in this chapter consists of two consecutive tasks: first implement a replaceable Jacobian solver module, then use that module to compute the joint load corresponding to the end-effector payload. The corresponding script is located at `joyarm_code/chapt/chapt4/chapt4_jacobian_exercise.py`; see the comments at the head of the script for usage.

### 5.1 Practice objectives and computation objects

| Task | Input | What to complete | Output and verification |
|:---:|:---:|:---:|:---:|
| Task 1: Implement the Jacobian module | Robotic arm model, joint angles, target frame | Subclass `JacobianSolver` and complete `PracticeJacobianSolver.jac()` | Return the $6\times n$ Jacobian; the Chapter 4 framework computes the smallest singular value and condition number along the preset trajectory |
| Task 2: Compute the joint load | The Jacobian obtained in Task 1, the six-dimensional external load at the end effector | Complete `motor_torque_from_external_load()` | Return the equilibrium torque of each joint and compare it with the joint torque limits |

Both tasks use the same reference frame convention: the Jacobian and the six-dimensional end-effector load are both expressed in the base frame, and the point of application of the force and torque is the TCP origin.

### 5.2 Task 1: Complete the Jacobian solver module

The script already defines `PracticeJacobianSolver(JacobianSolver)`; you only need to complete `jac()`. In your implementation, read the model from `arm.pin_model`, create a private `pin.Data` for this computation, check the joint angles and target frame, and then call Pinocchio to compute the frame Jacobian in the `LOCAL_WORLD_ALIGNED` reference frame.

After completion, the Chapter 4 common framework will call this module at each sampled configuration along the preset trajectory, and output the smallest singular value at the start point, the end point, and along the whole path, as well as the maximum condition number along the path. When playing with `--meshcat`, the terminal also shows the smallest singular value of the current configuration. The framework only provides the model, the fixed trajectory, verification, and display; it does not call the inverse kinematics of Chapter 3, the trajectory planning of Chapter 5, or the control module of Chapter 6.

### 5.3 Task 2: Compute the joint load from the end-effector load

Task 2 gives the external load acting at the TCP origin in the base frame

$$
\bm F_{\mathrm{ext}}
=
\begin{bmatrix}
\bm f_{\mathrm{ext}}\\
\bm n_{\mathrm{ext}}
\end{bmatrix}
$$

and uses the Jacobian computed in Task 1 to find the motor torques required for static equilibrium:

$$
\boxed{
\bm\tau_{\mathrm{motor}}
=-\bm J^T\bm F_{\mathrm{ext}}
}
$$

By default, the script uses the external force produced by a $2\,\mathrm{kg}$ weight in the vertical direction of the base frame, with the external end-effector torque set to zero. After you implement `motor_torque_from_external_load()`, the terminal outputs the equilibrium torques of the six joints and the torque limit utilization of each joint. Only the static torque caused by the external end-effector load is computed here; the robotic arm's own gravity, friction, and motion inertia are not included.

After completing all the practice in Chapters 3 to 6, you can run `chapt/common/motion_exercise.py` to connect the modules of each chapter into a single integrated motion pipeline. The single-chapter practice and the integrated experiment are independent of each other, so an unfinished Chapter 4 will not affect the other chapters.

After entering the code repository, run:

```bash
cd joyarm_code
uv sync
uv run python chapt/chapt4/chapt4_jacobian_exercise.py
```

To also observe the variation of the singular values along the trajectory, run:

```bash
uv run python chapt/chapt4/chapt4_jacobian_exercise.py --meshcat
```
