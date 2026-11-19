# Chapter 12: Teaching and Teleoperation

> 📌 **Overview**: This chapter introduces teaching and teleoperation techniques for robotic arms, covering same-arm teaching, leader-follower scaled isomorphic arms, end-effector data recording and playback for leader-follower non-isomorphic arms, and data recording from a leader-side VR spatial controller, among other approaches.

<!-- ✍️ Writing guide (HTML comment, not rendered on the site; may be kept or deleted once the draft is complete)

[Chapter positioning] Application part · hands-on chapter, extending the "record → playback/reproduce" paradigm to various teaching/teleoperation forms; it is a deepening of the teaching and reproduction of the [complete arm](arm.md) in the usage part.
[Reference template] Use a "data recording format table + recording/playback flow table" consistently in each section (refer to the step flow table style of quick_start.md).
[Fixed skeleton]
  · Line 1: H1 chapter title (chapter number written as 'Chapter N'); line 3 must be a "> 📌 **Overview**: ..." blockquote summary
    (no heading level, a one-sentence summary of the whole chapter, bold keywords, the logical flow of each section, and the practice in the last section).
  · The body expands as ## → ### → ####, with no separator lines between top-level ## headings.
  · 💡 Suggest adding a section "## 5 Chapter practice: combining teaching and teleoperation on JoyArm" to match the "end-of-chapter practice" convention of the whole tutorial, corresponding to the script joyarm_code/chapt/chapt12/chapt12_teleop_demo.py.
[Global writing conventions] (see AGENTS.md for details)
  · Concise, clear, and beginner-friendly; avoid leaps.
  · Center all tables with `:---:` (write it for every column); no need to confirm with the user.
  · Heading numbering: H2 uses Arabic numerals restarting from 1 in each chapter; H3 is "parent H2.index"; chapter numbers are written as 'Chapter N'.
  · Code: prefer the "script reference sentence": "The corresponding script is located at `joyarm_code/chapt/chapt12/chapt12_teleop_demo.py`; see the comments at the top of the script for usage."
  · Reusable core library joyarm_code/joyarm_core/.
  · Figures: place images in docs/assets/joyin-arm/tutorial/images/chapt12_teleop/ (leader-follower/VR sketches); if not ready, use ![Image placeholder: description](); mermaid may be used for data flows.
  · Callouts: > 💡 intuition/mnemonic  |  > 📌 important note/cross-chapter reference  |  > ⚠️ warning/caution.
  · Use relative links for cross-chapter references (e.g. [Chapter 3](chapt3_ikine.md) IK for non-isomorphic arms, [Chapter 11](chapt11_safety.md) teleoperation safety).
  · Do not write a "chapter summary"; the overview on line 3 replaces it.
[Scripts/libraries referenced in this chapter] chapt12_teleop_demo.py (to be built), joyarm_teleop (planned; will be located in joyarm_ros2_ws), joyarm/joyarm.py, robotics/ikine/, robotics/fkine/.
-->

## 1 Same-arm teaching data recording and playback

<!-- ✍️ Key points for this section:
  · Goal: explain teaching on "the same arm" — dragging to record the joint trajectory → playback to reproduce.
  · Give a "data recording format table" (sampled field | meaning | unit | example) + a "recording/playback flow table" (step | operation | purpose).
  · Reference joyarm_teleop (will be located in joyarm_ros2_ws) using the script reference sentence.
  · Closing > 💡: same-arm teaching is the simplest and is often used for quick programming of repetitive tasks.
-->

## 2 Joint data recording and playback for leader-follower scaled isomorphic arms

<!-- ✍️ Key points for this section:
  · Goal: explain joint-level teleoperation of a leader-follower pair (isomorphic but with a scaling ratio) — the leader arm's joint angles are mapped proportionally to the follower arm.
  · Give the scaling mapping formula $q_{\text{follower}}=k\cdot q_{\text{leader}}+q_0$; explain the effect of the scaling ratio on the workspace/safety.
  · Add a "leader-follower isomorphic teleoperation parameter table" (parameter | meaning | value/example | notes).
  · ⚠️ Note: the scaling ratio changes the effective workspace and speed, so the speed limit/limit protection of [Chapter 11](chapt11_safety.md) must be combined.
-->

## 3 End-effector data recording and playback for leader-follower non-isomorphic arms

<!-- ✍️ Key points for this section:
  · Goal: explain teleoperation of a leader-follower pair (non-isomorphic configurations) — record the leader arm's "end-effector pose" and map it to the follower arm's joints through IK.
  · Give the data flow: leader arm end-effector pose (FK) → coordinate transform → follower arm end-effector target → IK → follower arm joint commands; add a mermaid data flow diagram.
  · Emphasize the dependency on IK and the handling of singularities/multiple solutions (linking to [Chapter 3](chapt3_ikine.md)); reference joyarm_teleop (will be located in joyarm_ros2_ws) and robotics/ikine/.
-->

## 4 Data recording from a leader-side VR spatial controller

<!-- ✍️ Key points for this section:
  · Goal: explain teleoperation "without a physical leader arm" — using a VR spatial controller/hand pose as the leader side and mapping it to the follower arm's end effector.
  · Give the mapping flow from the VR controller pose (6D) → follower arm end effector, with ![Image placeholder: VR teleoperation sketch]().
  · Discuss the advantages of a VR leader side (no leader-arm hardware, scalable workspace) and the challenges (no force feedback).
  · Closing > 📌: VR teleoperation is often combined with the motion-sensing devices of [Chapter 14](chapt14_ui.md) and the force feedback of [Chapter 9](chapt9_force.md) to form a closed loop.
-->

## 5 Chapter practice: combining teaching and teleoperation on JoyArm

<!-- ✍️ Key points for this section:
  · Goal: use scripts to implement the teaching/teleoperation methods of this chapter (e.g. same-arm teaching recording and playback). The corresponding script is located at `joyarm_code/chapt/chapt12/chapt12_teleop_demo.py`; see the comments at the top of the script for usage.
  · Suggested structure: recording flow → playback flow → run results (add ![Image placeholder: teaching playback result]()).
-->
