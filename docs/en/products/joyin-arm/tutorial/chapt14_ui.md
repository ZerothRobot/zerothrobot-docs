# Chapter 14: User Interfaces

> 📌 **Overview**: This chapter introduces the various user interaction interfaces that the robotic arm exposes to the outside world: the UI interface, speech recognition and synthesis, camera calibration and image recognition parsing, NFC cards, UWB, and motion-sensing devices.

<!-- ✍️ Writing guide (HTML comment, not rendered on the site; may be kept or deleted once the draft is complete)

[Chapter positioning] Application part · integration chapter, covering the robotic arm's "outward-facing" human-machine/environment interaction interfaces, and providing input and output means for the comprehensive project of [Chapter 15](chapt15_project.md).
[Reference template] Use a "solution comparison table + integration example" style consistently in each section (refer to the comparison tables of quick_start.md / chapt1_intro.md).
[Fixed skeleton]
  · Line 1: H1 chapter title (chapter number written as 'Chapter N'); line 3 must be a "> 📌 **Overview**: ..." blockquote summary
    (no heading level, a one-sentence summary of the whole chapter, bold keywords, the logical flow of each section, and the practice in the last section).
  · The body expands as ## → ### → ####, with no separator lines between top-level ## headings.
  · 💡 Suggest adding a section "## 7 Chapter practice: multimodal user interface integration" to match the "end-of-chapter practice" convention of the whole tutorial, corresponding to the script joyarm_code/chapt/chapt14/chapt14_ui_demo.py.
[Global writing conventions] (see AGENTS.md for details)
  · Concise, clear, and beginner-friendly; avoid leaps.
  · Center all tables with `:---:` (write it for every column); no need to confirm with the user.
  · Heading numbering: H2 uses Arabic numerals restarting from 1 in each chapter; H3 is "parent H2.index"; chapter numbers are written as 'Chapter N'.
  · Code: prefer the "script reference sentence": "The corresponding script is located at `joyarm_code/chapt/chapt14/chapt14_ui_demo.py`; see the comments at the top of the script for usage."
  · Reusable core library joyarm_code/joyarm_core/: vision / viz (visualization/UI) / joyarm / ros2.
  · Figures: place images in docs/assets/joyin-arm/tutorial/images/chapt14_ui/ (interface/calibration sketches); if not ready, use ![Image placeholder: description]().
  · Callouts: > 💡 intuition/mnemonic  |  > 📌 important note/cross-chapter reference  |  > ⚠️ warning/caution.
  · Use relative links for cross-chapter references (e.g. motion sensing/VR in [Chapter 12](chapt12_teleop.md), the comprehensive project in [Chapter 15](chapt15_project.md)).
  · Use *To be added* for unknown parameters/models.
  · Do not write a "chapter summary"; the overview on line 3 replaces it.
[Scripts/libraries referenced in this chapter] chapt14_ui_demo.py (to be built), joyarm_core/apps/vision.py (planned), viz.py (to be built; suggested location quick_start/ or joyarm_core/apps/), joyarm/joyarm.py, joyarm_ros2_ws/src/joyarm_node (the joyarm_node package).
-->

## 1 UI interface

<!-- ✍️ Key points for this section:
  · Goal: explain the graphical interface design for robotic arm control/monitoring: layout, key controls, status display, and command dispatch.
  · Give a "interface layout sketch" (image placeholder) + a "key functions table" (function | interaction method | corresponding backend | notes).
  · Reference viz.py (to be built; suggested location quick_start/ or joyarm_core/apps/) using the script reference sentence.
  · Closing > 💡: a good UI packages complex capabilities into one or two buttons, lowering the barrier to use.
-->

## 2 Speech recognition and synthesis

<!-- ✍️ Key points for this section:
  · Goal: explain the integration and applicable scenarios of speech interaction (ASR recognition + TTS synthesis).
  · Add a "speech solution comparison table" (solution | local/cloud | latency | accuracy | privacy | remarks).
  · Give a minimal integration example (command word → robotic arm action).
-->

## 3 Camera calibration and image recognition parsing

<!-- ✍️ Key points for this section:
  · Goal: explain camera calibration (intrinsics + hand-eye calibration) and image recognition parsing (classic vision + VLM).
  · There are already two points (hand-eye calibration eye-in-hand/eye-to-hand; classic vision detection/pose estimation, VLM understanding); suggest:
    - a "hand-eye calibration comparison table" (method | camera position | calibration target | applicable scenario | remarks);
    - a "classic vision vs VLM comparison table" (method | output | data requirement | real-time capability | interpretability | applicability).
  · Reference joyarm_core/apps/vision.py using the script reference sentence; give the link from "recognition result → end-effector target pose" (using the IK of [Chapter 3](chapt3_ikine.md)).
-->

* Hand-eye calibration (eye-in-hand / eye-to-hand)
* Classic vision (object detection/pose estimation), VLM visual understanding

## 4 NFC card

<!-- ✍️ Key points for this section:
  · Goal: explain the integration and applicable scenarios of the NFC card as an "identity/task credential" (card swipe to start/stop, task switching).
  · Give an integration sketch + an "NFC application table" (scenario | trigger action | information read | notes).
  · Closing > 💡: NFC suits quick scheduling of "one card, one task".
-->

## 5 UWB

<!-- ✍️ Key points for this section:
  · Goal: explain UWB positioning as an external pose input (e.g. tracking a moving target, human-robot collaborative safety distance).
  · Give a "UWB characteristics table" (accuracy | update rate | range | multiple tags | notes) + an integration sketch.
  · ⚠️ Note: UWB positioning errors must be combined with the safety distance protection of [Chapter 11](chapt11_safety.md).
-->

## 6 Motion-sensing devices

<!-- ✍️ Key points for this section:
  · Goal: explain the integration of motion-sensing devices (data gloves, motion capture, inertial wristbands, etc.) as human motion input.
  · Add a "motion-sensing device comparison table" (device | captured quantity | degrees of freedom | latency | wearing difficulty | typical use).
  · Closing > 📌: motion-sensing input is often combined with the teleoperation of [Chapter 12](chapt12_teleop.md) for "human motion → robot motion" mapping.
-->

## 7 Chapter practice: multimodal user interface integration

<!-- ✍️ Key points for this section:
  · Goal: use scripts to integrate several user interfaces of this chapter (e.g. UI + speech + vision) to control the robotic arm. The corresponding script is located at `joyarm_code/chapt/chapt14/chapt14_ui_demo.py`; see the comments at the top of the script for usage.
  · Suggested structure: interface selection → integration flow → run results (add ![Image placeholder: multimodal interaction result]()).
-->
