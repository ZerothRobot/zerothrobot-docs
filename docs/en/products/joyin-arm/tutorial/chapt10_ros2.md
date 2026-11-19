# Chapter 10: ROS 2

> 📌 **Overview**: This chapter introduces the core concepts and ecosystem of the ROS2 robot operating system: basic concepts and workspace structure, topic communication, service communication, common tools and the ecosystem, and the moveit2 integration, and puts its ROS2 structure and implementation into practice on JoyArm.

<!-- ✍️ Writing guide (HTML comment, not rendered on the site; may be kept or deleted once the draft is complete)

[Chapter positioning] Advanced part · ecosystem chapter, connecting the preceding kinematics/trajectory/control to the ROS2 ecosystem; it is the entry point for engineering deployment.
[Reference template] Use mainly comparison tables + command examples for the concept/ecosystem part (refer to the environment/command style of motor.md), and block diagrams + script references for the integration part.
[Fixed skeleton]
  · Line 1: H1 chapter title (chapter number written as 'Chapter N'); line 3 must be a "> 📌 **Overview**: ..." blockquote summary
    (no heading level, a one-sentence summary of the whole chapter, bold keywords, the logical flow of each section, and the practice in the last section).
  · The body expands as ## → ### → ####, with no separator lines between top-level ## headings.
  · The last section is fixed as "## 6 Chapter practice: JoyArm's ROS2 structure and implementation", corresponding to the script joyarm_code/chapt/chapt10/chapt10_ros2_demo.py.
[Global writing conventions] (see AGENTS.md for details)
  · Concise, clear, and beginner-friendly; avoid leaps.
  · Center all tables with `:---:` (write it for every column); no need to confirm with the user.
  · Heading numbering: H2 uses Arabic numerals restarting from 1 in each chapter; H3 is "parent H2.index"; chapter numbers are written as 'Chapter N'.
  · Commands/code: use ```shell``` fences for ROS2 commands; ```python``` may be used for node/topic examples; use the "script reference sentence" for scripts.
  · Reusable core library joyarm_code/joyarm_core/: ros2 (ROS2 wrapper) / joyarm / control / fkine / ikine.
  · Figures: place images in docs/assets/joyin-arm/tutorial/images/chapt10_ros2/; node relationship diagrams may use mermaid ```mermaid```.
  · Callouts: > 💡 intuition/mnemonic  |  > 📌 important note/cross-chapter reference  |  > ⚠️ warning/caution.
  · Use relative links for cross-chapter references (e.g. [Chapter 7](chapt7_urdf.md) URDF, [Chapter 6](chapt6_control.md) control as the underlying layer of moveit2).
  · Do not write a "chapter summary"; the overview on line 3 replaces it.
[Scripts/libraries referenced in this chapter] chapt10_ros2_demo.py (to be built), joyarm_ros2_ws/src/joyarm_node (the joyarm_node package), joyarm/joyarm.py, robotics/control/, robotics/fkine/, robotics/ikine/.
-->

## 1 Basic concepts and workspace structure

<!-- ✍️ Key points for this section:
  · Goal: give readers a global understanding of ROS2: nodes/topics/services/actions, DDS, and the workspace (overlay) structure.
  · Add a "ROS2 core concepts table" (concept | one-sentence explanation | analogy | counterpart in this chapter), and a "workspace directory structure" sketch.
  · Give ```shell``` command examples for creating a workspace (colcon build / source).
-->

## 2 Topic communication

<!-- ✍️ Key points for this section:
  · Goal: explain the principle and usage of topic communication (pub/sub, asynchronous, many-to-many).
  · Give minimal publisher/subscriber ```python``` examples; add a node relationship diagram (mermaid: JoyArm control node ↔ joint state topic).
  · Closing > 💡: topics are suitable for continuously broadcasting state quantities (joint angles, end-effector pose).
-->

## 3 Service communication

<!-- ✍️ Key points for this section:
  · Goal: explain service/action communication (request-response, interruptible execution).
  · Add a "topic vs service vs action comparison table" (mode | communication direction | synchrony | suitable scenario | example).
  · Give a service call example (e.g. "move the robotic arm to the specified pose").
-->

## 4 Common tools and ecosystem

rviz, rqt, nav2, moveit2.

<!-- ✍️ Key points for this section:
  · Goal: briefly introduce the common tools of the ROS2 ecosystem.
  · The original text already has one line of tool names; suggest organizing it into a "tool quick-reference table" (tool | purpose | typical scenario | one-line getting started).
  · rviz (visualization)/rqt (graphical debugging)/nav2 (navigation, rarely used for robotic arms; the applicability boundary may be explained)/moveit2 (motion planning, see §5 for details).
-->

## 5 moveit2 integration

<!-- ✍️ Key points for this section:
  · Goal: explain how moveit2 performs motion planning for a robotic arm: planning groups, kinematic solvers (IK), planning interfaces, and the correspondence with [Chapter 2](chapt2_fkine.md)~[Chapter 6](chapt6_control.md).
  · Give the "configure → plan → execute" flow, with a moveit2 node block diagram (mermaid); explain the IK solver choice (linking to [Chapter 3](chapt3_ikine.md)).
  · Reference joyarm_ros2_ws/src/joyarm_node (the joyarm_node package) (the wrapper) and the chapt scripts, using the script reference sentence.
-->

## 6 Chapter practice: JoyArm's ROS2 structure and implementation

<!-- ✍️ Key points for this section:
  · Goal: build a minimal runnable ROS2 node on JoyArm (publishing joint states on a topic + receiving motion commands via a service/topic).
  · Suggested structure: node structure diagram → launch commands (```shell```) → observe with rviz → send commands and execute → verify.
  · The main body is script practice; use the script reference sentence: "The corresponding script is located at `joyarm_code/chapt/chapt10/chapt10_ros2_demo.py`; see the comments at the top of the script for usage."
  · You may add > 💡: ROS2 is the integration base for the subsequent [application part](chapt11_safety.md) (monitoring/safety, comprehensive project).
-->
