# Chapter 11: State Monitoring and Safety Protection

> 📌 **Overview**: Aimed at real-machine applications, this chapter introduces the state monitoring and software safety protection mechanisms of the robotic arm during operation: the relevant state quantities and protection strategies are introduced at the joint level, the end-effector level, and the whole-machine level respectively, complemented by the remaining state quantities and user-initiated protection.

<!-- ✍️ Writing guide (HTML comment, not rendered on the site; may be kept or deleted once the draft is complete)

[Chapter positioning] Application part · engineering chapter, organizing the state quantities of the preceding chapters (joint angles/velocities/torques, end-effector pose/force, Jacobian/singularity, etc.) into a "monitoring → protection" safety system.
[Reference template] Engineering chapters are mainly built on "monitored quantity + threshold table" + "protection strategy table" (refer to the checklist/flow table style of quick_start.md).
[Fixed skeleton]
  · Line 1: H1 chapter title (chapter number written as 'Chapter N'); line 3 must be a "> 📌 **Overview**: ..." blockquote summary
    (no heading level, a one-sentence summary of the whole chapter, bold keywords, the logical flow of each section, and the practice in the last section).
  · The body expands as ## → ### → ####, with no separator lines between top-level ## headings.
  · 💡 Suggest adding a section "## 5 Chapter practice: verification of JoyArm software safety protection strategies" to match the "end-of-chapter practice" convention of the whole tutorial, corresponding to the script joyarm_code/chapt/chapt11/chapt11_safety_demo.py.
[Global writing conventions] (see AGENTS.md for details)
  · Concise, clear, and beginner-friendly; avoid leaps.
  · Center all tables with `:---:` (write it for every column); no need to confirm with the user.
  · Heading numbering: H2 uses Arabic numerals restarting from 1 in each chapter; H3 is "parent H2.index"; chapter numbers are written as 'Chapter N'.
  · Code: prefer the "script reference sentence": "The corresponding script is located at `joyarm_code/chapt/chapt11/chapt11_safety_demo.py`; see the comments at the top of the script for usage."
  · Reusable core library joyarm_code/joyarm_core/: joyarm / jacobian (collision detection/singularity) / control (emergency stop); state monitoring and safety strategies live in the ROS2 monitoring node (joyarm_ros2_ws, Ch10/11).
  · Figures: place images in docs/assets/joyin-arm/tutorial/images/chapt11_safety/ (hierarchical protection sketch); if not ready, use ![Image placeholder: description](); mermaid may be used for the protection flow.
  · Callouts: > 💡 intuition/mnemonic  |  > 📌 important note/cross-chapter reference  |  > ⚠️ warning/caution (must be especially prominent for safety-related items).
  · Use *To be added* for unknown thresholds; use relative links for cross-chapter references (e.g. the Jacobian in [Chapter 4](chapt4_jacobian.md), force sensing in [Chapter 9](chapt9_force.md)).
  · Do not write a "chapter summary"; the overview on line 3 replaces it.
[Scripts/libraries referenced in this chapter] chapt11_safety_demo.py (to be built), utils/limits.py, the joyarm_ros2_ws/monitor node (planned), joyarm/joyarm.py, robotics/jacobian/, robotics/control/.
-->

## 1 Joint-level state quantities and protection

Position limits, velocity limits, acceleration, torque limits, high-temperature protection, overvoltage and overcurrent.

<!-- ✍️ Key points for this section:
  · Goal: explain each monitored quantity at the joint level and its software protection strategy.
  · The original text already has one line of points; suggest organizing it into a "joint-level monitored quantities and protection table" (state quantity | monitoring source | typical threshold | action when the limit is exceeded | notes).
  · ⚠️ Add a safety note: the joint level is the last line of defense, so thresholds need a margin (linking to torque in [Chapter 8](chapt8_dyn.md) and load estimation in [Chapter 4](chapt4_jacobian.md)).
  · Use *To be added* as a placeholder for thresholds.
-->

## 2 End-effector-level state quantities and protection

Position range, velocity limits, force limits.

<!-- ✍️ Key points for this section:
  · Goal: explain the monitoring and protection at the end-effector level (workspace boundary, end-effector velocity, contact force).
  · Organize into an "end-effector-level monitored quantities and protection table" (same structure as above); the position range links to the workspace in §5 of [Chapter 2](chapt2_fkine.md).
  · Closing > 📌: the end-effector force limit is the safety prerequisite for contact operations (force control in [Chapter 9](chapt9_force.md)).
-->

## 3 Whole-machine-level state quantities and protection

<!-- ✍️ Key points for this section:
  · Goal: explain the two types of collision protection at the whole-machine level: self-collision (between links) and external collision (sensorless detection based on joint torque feedback).
  · There are already two points; suggest expanding them: give the idea of the collision detection algorithm (torque residual/momentum observer), with a detection flow diagram (mermaid).
  · Add a "whole-machine-level protection strategy table" (scenario | detection method | response action | response time | notes).
-->

* Self-collision
* External collision: sensorless collision detection based on joint torque feedback

## 4 Other state quantities and user-initiated protection

<!-- ✍️ Key points for this section:
  · Goal: supplement the remaining state quantities and user-initiated protection means (motion emergency stop, environment perception, etc.).
  · There are already two points (motion emergency stop: damping torque/configuration holding; others: camera feed, status indicator lights); suggest expanding them into a "remaining state quantities and active protection table".
  · Closing > 💡: two implementations of the emergency stop — damping torque (smooth deceleration) vs configuration holding (locking the current position) — choose according to the scenario.
-->

* Motion emergency stop: damping torque or configuration holding
* Other states: camera feed, status indicator lights, etc.

## 5 Chapter practice: verification of JoyArm software safety protection strategies

<!-- ✍️ Key points for this section:
  · Goal: use scripts to verify the software safety protection strategies of this chapter (triggering and clamping of joint/end-effector/whole-machine-level limits and collision protection). The corresponding script is located at `joyarm_code/chapt/chapt11/chapt11_safety_demo.py`; see the comments at the top of the script for usage.
  · Suggested structure: test scenario design → script flow → run results (add ![Image placeholder: protection trigger sketch]()).
-->
