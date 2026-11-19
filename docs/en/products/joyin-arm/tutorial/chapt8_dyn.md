# Chapter 8: Dynamics and Control

> 📌 **Overview**: This chapter explains robotic arm dynamics and its application in control. Dynamics has two major uses: simulation, where torques are given to compute states, and control, where states are given to compute torques. The chapter compares the computational efficiency of the Lagrange and Newton-Euler methods, derives the structure of the dynamics equations, and implements robotic arm control based on dynamic effects.

<!-- ✍️ Writing guide (HTML comment, not rendered on the site; may be kept or deleted once the draft is complete)

[Chapter positioning] Advanced part · theory chapter, introducing the "torque/dynamics" dimension on top of the kinematic control of [Chapter 6](chapt6_control.md); for the source of dynamic parameters see [Chapter 7](chapt7_urdf.md) (URDF inertia).
[Reference template] Align with chapt2_fkine.md (the most complete theoretical chapter template): mathematical derivation + an end-of-chapter "chapter practice" structure.
[Fixed skeleton]
  · Line 1: H1 chapter title (chapter number written as 'Chapter N'); line 3 must be a "> 📌 **Overview**: ..." blockquote summary
    (no heading level, a one-sentence summary of the whole chapter, bold keywords, the logical flow of each section, and the practice in the last section).
  · The body expands as ## → ### → ####, with no separator lines between top-level ## headings.
  · The last section is fixed as "## 4 Chapter practice: JoyArm control implementation based on dynamics", corresponding to the script joyarm_code/chapt/chapt8/chapt8_dyn_demo.py.
[Global writing conventions] (see AGENTS.md for details)
  · Concise, clear, and beginner-friendly; avoid leaps.
  · Center all tables with `:---:` (write it for every column); no need to confirm with the user.
  · Heading numbering: H2 uses Arabic numerals restarting from 1 in each chapter; H3 is "parent H2.index"; chapter numbers are written as 'Chapter N'.
  · Math: inline $...$ and display $$...$$; the dynamics equation $\bm{M}(q)\ddot{q}+\bm{C}(q,\dot{q})\dot{q}+\bm{g}(q)=\bm{\tau}$; use \bm{} for matrices.
  · Code: prefer the "script reference sentence": "The corresponding script is located at `joyarm_code/chapt/chapt8/chapt8_dyn_demo.py`; see the comments at the top of the script for usage."
  · Reusable core library joyarm_code/joyarm_core/: dynamics / control / fkine / joyarm.
  · Figures: place images in docs/assets/joyin-arm/tutorial/images/chapt8_dyn/; if not ready, use ![Image placeholder: description](); control/recursive flows may use mermaid.
  · Callouts: > 💡 intuition/mnemonic  |  > 📌 important note/cross-chapter reference  |  > ⚠️ warning/caution.
  · Use *To be added* for unknown parameters such as inertia; use relative links for cross-chapter references (e.g. [Chapter 6](chapt6_control.md), [Chapter 9](chapt9_force.md)).
  · Do not write a "chapter summary"; the overview on line 3 replaces it.
[Scripts/libraries referenced in this chapter] chapt8_dyn_demo.py (to be built), robotics/dynamics/, robotics/control/, robotics/fkine/, joyarm/joyarm.py.
-->

## 1 Newton-Euler recursive dynamics algorithm

Comparison of the computational efficiency of the Lagrange method and the Newton-Euler method.

<!-- ✍️ Key points for this section:
  · Goal: explain the Newton-Euler recursive method clearly (outward recursion for velocities and accelerations, inward recursion for torques), and compare it with the Lagrange method.
  · The original text already has one sentence on "efficiency comparison"; suggest expanding it into a "Lagrange vs Newton-Euler" comparison table (principle | computational cost | recursiveness | suitable scenario | real-time capability).
  · Give a sketch of the recursion flow (mermaid or ![Image placeholder: Newton-Euler recursion flow]()).
  · Closing > 💡: use Newton-Euler for real-time control (O(n) recursion) and Lagrange for theoretical analysis (closed form).
-->

## 2 Structure of the dynamics equations

<!-- ✍️ Key points for this section:
  · Goal: explain the three equivalent forms of the dynamics equations and the physical meaning of each term.
  · There are already three points (state space/configuration space/Cartesian space); suggest organizing them into a "comparison table of the three forms"
    (form | independent variables | coefficient matrices | physical meaning | typical use), and give the equation under each form:
    - Joint space: $\bm{M}(q)\ddot{q}+\bm{C}(q,\dot{q})\dot{q}+\bm{g}(q)=\bm{\tau}$;
    - Cartesian space: transformed through the Jacobian (linking to [Chapter 4](chapt4_jacobian.md)).
  · Explain the physical meaning of $\bm{M}$ (inertia), $\bm{C}$ (Coriolis/centrifugal), and $\bm{g}$ (gravity) term by term.
-->

* State-space equation: the coefficient matrices are the robot's joint positions and joint velocities
* Configuration-space equation: the coefficient matrices are the robot's joint positions
* Dynamics equation in Cartesian space

## 3 Robotic arm control based on dynamic effects

<!-- ✍️ Key points for this section:
  · Goal: explain control methods that use dynamics feedforward/feedback: gravity compensation, Coriolis compensation, and computed torque control (CTC/inverse dynamics control).
  · Give the computed torque control law formula and block diagram (mermaid: desired → inverse dynamics → torque command → robotic arm → feedback), and compare the tracking performance of "no compensation vs with compensation".
  · ⚠️ Note: this depends on accurate dynamics/inertia parameters (from the URDF in [Chapter 7](chapt7_urdf.md)); parameter errors degrade the effect.
  · Closing > 📌: this section is the basis of the force control (impedance/admittance) in [Chapter 9](chapt9_force.md).
-->

## 4 Chapter practice: JoyArm control implementation based on dynamics

<!-- ✍️ Key points for this section:
  · Goal: implement dynamics feedforward/computed torque control on JoyArm and verify it (compare the tracking error with pure kinematic control).
  · Suggested structure: load the URDF dynamics parameters → implement CTC → compare the tracking error curves for the same trajectory → discuss.
  · The main body is script practice; use the script reference sentence: "The corresponding script is located at `joyarm_code/chapt/chapt8/chapt8_dyn_demo.py`; see the comments at the top of the script for usage."
  · You may add > 💡: dynamics control pays off most in high-speed/heavy-payload scenarios, while kinematic control is sufficient at low speed and light load.
-->
