# Chapter 15: JoyArm Integrated Project

> 📌 **Overview**: The closing comprehensive project of the whole tutorial, integrating the basic part (kinematics/trajectory/control), the advanced part (ROS2/force control), and the application part (vision/teaching/end effectors/user interfaces) into one complete closed-loop task.

<!-- ✍️ Writing guide (HTML comment, not rendered on the site; may be kept or deleted once the draft is complete)

[Chapter positioning] Application part · comprehensive chapter (capstone), the closing loop of the whole tutorial — stringing the capabilities of the previous 14 chapters into one complete task, with many cross-chapter references.
[Reference template] Comprehensive project chapters follow the main line of "system layered block diagram + implementation of each layer + commissioning steps" (use mermaid for block diagrams and flow tables for steps).
[Fixed skeleton]
  · Line 1: H1 chapter title (chapter number written as 'Chapter N'); line 3 must be a "> 📌 **Overview**: ..." blockquote summary
    (no heading level, a one-sentence summary of the whole chapter, bold keywords, the logical flow of each section, and the practice in the last section).
  · The body expands as ## → ### → ####, with no separator lines between top-level ## headings.
  · The last section is fixed as "## 5 Chapter practice: JoyArm comprehensive task deployment and commissioning", corresponding to the script joyarm_code/chapt/chapt15/chapt15_project_demo.py.
[Global writing conventions] (see AGENTS.md for details)
  · Concise, clear, and beginner-friendly; avoid leaps.
  · Center all tables with `:---:` (write it for every column); no need to confirm with the user.
  · Heading numbering: H2 uses Arabic numerals restarting from 1 in each chapter; H3 is "parent H2.index"; chapter numbers are written as 'Chapter N'.
  · Code: prefer the "script reference sentence": "The corresponding script is located at `joyarm_code/chapt/chapt15/chapt15_project_demo.py`; see the comments at the top of the script for usage."
  · Reusable core library joyarm_code/joyarm_core/: joyarm / fkine / ikine / jacobian / trajectory / control /
    dynamics (almost the whole library is involved; the teleop / vision pipelines are planned in joyarm_core/apps/, and monitoring is in the ROS2 node).
  · Figures: place images in docs/assets/joyin-arm/tutorial/images/chapt15_project/; use ```mermaid``` fences for the system layering/data flow.
  · Callouts: > 💡 intuition/mnemonic  |  > 📌 important note/cross-chapter reference (especially numerous in this chapter)  |  > ⚠️ warning/caution (commissioning safety).
  · Use relative links for cross-chapter references, covering the basic/advanced/application parts.
  · Do not write a "chapter summary"; the overview on line 3 replaces it (as the closing of the whole tutorial, the overview may be somewhat elevated).
[Scripts/libraries referenced in this chapter] chapt15_project_demo.py (to be built), plus all core libraries in joyarm_core/.
-->

## 1 Task definition and system architecture

<!-- ✍️ Key points for this section:
  · Goal: define a concrete comprehensive task (e.g. the closed loop of "visual recognition → grasping → assembly → force-controlled tightening"), and give the overall layered system architecture.
  · Give a "task flow description" + a system layered architecture block diagram (mermaid: perception layer / planning and control layer / interaction layer + hardware).
  · Use a table to map "task steps ↔ chapter capabilities used" (step | required capability | corresponding chapter | implementation library).
-->

## 2 Perception layer

<!-- ✍️ Key points for this section:
  · Goal: integrate perception such as vision/NFC/UWB ([Chapter 14](chapt14_ui.md)) to accomplish the "see/read/locate" required by the task.
  · Give the perception layer data flow (figure/mermaid) + an output information table (perceived quantity | source | purpose | corresponding chapter).
  · Reference joyarm_core/apps/vision.py using the script reference sentence.
-->

## 3 Planning and control layer

<!-- ✍️ Key points for this section:
  · Goal: integrate kinematics/trajectory/motion control/dynamics/force control — perception result → target pose → trajectory ([Chapter 5](chapt5_trajectory.md)) → IK ([Chapter 3](chapt3_ikine.md)) → control ([Chapter 6](chapt6_control.md)/[Chapter 8](chapt8_dyn.md)/[Chapter 9](chapt9_force.md)).
  · Give the planning and control layer block diagram (mermaid) + a control strategy selection table (task stage | selected control | reason | corresponding chapter).
  · Closing > 📌: this layer is the concentrated application of the capabilities of the basic + advanced parts; pay attention to singularity/multiple solutions/dynamics coupling.
-->

## 4 Interaction layer: end effectors and force feedback

<!-- ✍️ Key points for this section:
  · Goal: integrate end effectors ([Chapter 13](chapt13_endeffector.md)) and force feedback ([Chapter 9](chapt9_force.md)/teleoperation in [Chapter 12](chapt12_teleop.md)) to accomplish task interaction.
  · Give an "interaction layer solution table" (subtask | end effector | force strategy | user interface | corresponding chapter).
  · ⚠️ Note: in the contact/force control stage, be sure to enable the force/velocity safety protection of [Chapter 11](chapt11_safety.md).
-->

## 5 Chapter practice: JoyArm comprehensive task deployment and commissioning

Complete the commissioning on a physical robot or in simulation.

<!-- ✍️ Key points for this section:
  · Goal: run the whole closed-loop task on a physical robot or in simulation, and give reproducible commissioning steps and troubleshooting guidance.
  · The original text already has one sentence "Complete the commissioning on a physical robot or in simulation"; suggest expanding it into a "commissioning steps table" (step | operation | expected result | common problem | corresponding tool/chapter).
  · The main body is script practice; use the script reference sentence: "The corresponding script is located at `joyarm_code/chapt/chapt15/chapt15_project_demo.py`; see the comments at the top of the script for usage."
  · Close with > 💡 or an overview paragraph (replacing the summary): the difficulty of a comprehensive project lies not in individual points but in the interfaces and timing coordination between layers — this is the key leap from "learning" to "using".
-->
