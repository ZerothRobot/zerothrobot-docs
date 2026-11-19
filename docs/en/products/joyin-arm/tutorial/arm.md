# Complete robotic arm

> 📌 **Overview**: For readers who want to start using it right away, no theoretical background is required; just follow the operations to get the complete arm moving.

<!-- ✍️ Writing guide (HTML comment, not rendered online; can be kept or deleted once the chapter is finalized)

[Chapter positioning] Usage part · operation chapter ("want to start using it right away": only operation steps are given; for the theory see Chapter 2 Forward kinematics and Chapter 6 Motion control in the fundamentals part).
[Reference template] Align with quick_start.md (quick start, the most complete model for the usage part / operation chapter).
[Fixed skeleton]
  · Line 1: H1 chapter title (no chapter number in the usage part); line 3 must be a "> 📌 **Overview**: ..." blockquote summary
    (one-sentence summary of the whole chapter, bold key terms, indicate the logical flow of each section).
  · Body text expands as ## → ###, with no horizontal rule between top-level ## headings.
  · The usage part is centered on "operation steps" and does not expand theory; prefer step flow tables.
[Global writing conventions] (see AGENTS.md for details)
  · Concise, clear and beginner-friendly, without jumps.
  · All tables are centered with `:---:` (written for every column); no need to confirm with the user.
  · Heading numbering: H2 restarts from Arabic numeral 1 in each chapter; H3 is "parent H2.serial number".
  · Code: prefer the "script reference phrasing" — "The corresponding script is located at `joyarm_code/chapt/xxx.py`; see the comments at the head of the script for usage."
  · Reusable core library joyarm_code/joyarm_core/: joyarm (JoyArm class + joyArm/listArm creation entry) + the six domains of robotics (fkine / ikine / jacobian / dynamics / trajectory / control).
  · Figures: place figures in docs/assets/joyin-arm/tutorial/images/arm/; if not ready, use ![Image placeholder: description]().
  · callout: > 💡 intuition/mnemonic  |  > 📌 important notes/cross-chapter references  |  > ⚠️ warning/note.
  · Use *To be added* for unknown values; use relative links for cross-chapter references: [Chapter N](chapterN_M.md).
  · Do not write a "chapter summary" — the overview on line 3 replaces it.
-->

## 1 Operation safety

> 🔒 **Required reading before first power-on**: Keep the workspace free of people and obstacles; move the robotic arm to a safe pose before powering on; never force the joints after power-on; in an emergency, press the emergency stop or cut the power immediately.

<!-- ✍️ Key writing points for this section:
  · A 🔒 safety callout already exists; keep it. Consider adding a small "emergency stop / power-off / recovery procedure" table (Step | Action | Purpose).
  · You may add a > ⚠️ note: operating the complete arm carries more risk than operating a single joint; always start unloaded, at low speed, and in a nearby workspace.
-->

## 2 Complete arm hardware parameters

The physical robot supplied with JoyArm is the **reBot Arm B601** series six-axis robotic arm (based on the open-source project reBot-DevArm), designed for desktop-level embodied intelligence applications and balancing payload capacity with flexibility. The series includes two models, B601-DM and B601-RS, which share the same main configuration and differ mainly in their joint motor solution. The main parameters are compared below:

JoyArm robotic arm overall appearance + coordinate frame annotation figures

| Parameter | reBot Arm B601-DM | reBot Arm B601-RS |
|:---:|:---:|:---:|
| Payload | 1.5 kg | 2.5 kg |
| Recommended workspace | 70% reach workspace | 70% reach workspace |
| Maximum reach | 767 mm | 754 mm |
| Weight | Approx. 4.5 kg | Approx. 6.7 kg |
| Repeat positioning accuracy | < ±0.2 mm | < ±0.1 mm |
| Degrees of freedom | 6 DOF + 1 gripper | 6 DOF + 1 gripper |
| Supported platforms/ecosystem | ROS1, ROS2, LeRobot, Pinocchio, Isaac Sim, Python SDK | ROS1, ROS2, LeRobot, Pinocchio, Isaac Sim, Python SDK |
| Supply voltage | DC 24V | DC 48V |

For detailed parameters and operation of the motors and end effectors, see the [Motor](motor.md) and [End effector](end.md) chapters respectively; for the MDH parameters and dynamics parameters of the whole robot, see §6 of this chapter.

## 3 Power-on and zero-position calibration of the complete arm

<!-- ✍️ Key writing points for this section:
  · Goal: let the reader safely complete power-on and zero-position calibration of the complete arm.
  · Use a step flow table as the main body (Step | Specific operation | Purpose | Demonstration image), following the format of quick_start §6.
  · Figures: power-on wiring diagram, zero-position calibration illustration, placed in docs/assets/joyin-arm/tutorial/images/arm/; if not ready, use ![Image placeholder: ...]().
  · Reference joyarm/joyarm.py (initialization/calibration methods of the JoyArm class), using the script reference phrasing.
-->

## 4 Complete arm joint control

<!-- ✍️ Key writing points for this section:
  · Goal: control the complete arm joint by joint in joint space (contrasted with single-joint control, emphasizing the coordination of the six joints).
  · A "position/velocity mode" comparison table is suggested (Mode | Applicable scenarios | Key parameters | Notes).
  · Leave the theory to Chapter 6 and give only operations here; reference joyarm/joyarm.py and the chapt scripts.
  · You may end with > 💡: joint control is the foundation of end-effector control.
-->

## 5 End-effector position control

<!-- ✍️ Key writing points for this section:
  · Goal: at the operation level, let the reader control the complete arm with the end-effector pose (input xyz/orientation → the robotic arm moves into place automatically).
  · Compare "end-effector control vs joint control" (Control target | Input | Intuitiveness | Applicable scenarios), and point out that forward kinematics runs underneath (theory in Chapter 2).
  · ⚠️ You must warn that the arm may fail to reach the target near workspace boundaries and singularities (theory in Chapter 4).
  · Reference robotics/fkine/ / joyarm/joyarm.py, with the chapt scripts.
-->

## 6 MDH and dynamics parameters

This section summarizes the kinematic and dynamic parameters of the complete arm for reference in modeling and control.

### 6.1 MDH parameters

The modified D-H (MDH) parameter table of the JoyArm six-axis robotic arm is used for forward/inverse kinematics solutions; see Section 3.2 of [Chapter 2](chapt2_fkine.md) for details.

### 6.2 Dynamics parameters

The mass, center of mass position, and inertia parameters of each JoyArm link, used for dynamics modeling and control (they can be extracted from the URDF exported in [Chapter 7](chapt7_urdf.md)):

| Link i | Mass mᵢ (kg) | Center of mass position (m) | Inertia tensor (kg·m²) |
|:---:|:---:|:---:|:---:|
| 1 | *To be added* | *To be added* | *To be added* |
| 2 | *To be added* | *To be added* | *To be added* |
| 3 | *To be added* | *To be added* | *To be added* |
| 4 | *To be added* | *To be added* | *To be added* |
| 5 | *To be added* | *To be added* | *To be added* |
| 6 | *To be added* | *To be added* | *To be added* |
