# Chapter 13: End Effectors

> 📌 **Overview**: This chapter introduces the unified architecture and identification scheme of JoyArm end effectors (including the magnetic quick-release type), and explains the principles and all common functions of each type of common end effector section by section (the end effector chapter in the usage part only covers operation; the principles are supplemented here).

<!-- ✍️ Writing guide (HTML comment, not rendered on the site; may be kept or deleted once the draft is complete)

[Chapter positioning] Application part · principle chapter, filling in the principles not covered by the [end effectors](end.md) chapter of the usage part, and giving an overall architecture of "unified interface + self-identification" (hot-swappable end effectors).
[Reference template] Principle chapters align with the concept overview style of chapt1_intro.md (concept comparison table + classification table + callouts); use a block diagram for the unified interface part.
[Fixed skeleton]
  · Line 1: H1 chapter title (chapter number written as 'Chapter N'); line 3 must be a "> 📌 **Overview**: ..." blockquote summary
    (no heading level, a one-sentence summary of the whole chapter, bold keywords, the logical flow of each section, and the practice in the last section).
  · The body expands as ## → ### → ####, with no separator lines between top-level ## headings.
  · 💡 Suggest adding a section "## 0 Unified interface and self-identification architecture for end effectors" before §1 (or merging it into the lead-in paragraph after the overview):
    explain the overall picture of the unified interface specification + magnetic quick release + automatic identification (identification code/electrical signal handshake), with an architecture block diagram (mermaid).
    Another option is to add "## 7 Chapter practice: end-effector hot-swap and self-identification verification" to match the "end-of-chapter practice" convention of the whole tutorial, corresponding to the script joyarm_code/chapt/chapt13/_endeffector_demo.py.
[Global writing conventions] (see AGENTS.md for details)
  · Concise, clear, and beginner-friendly; avoid leaps.
  · Center all tables with `:---:` (write it for every column); no need to confirm with the user.
  · Heading numbering: H2 uses Arabic numerals restarting from 1 in each chapter; H3 is "parent H2.index"; chapter numbers are written as 'Chapter N'.
  · Code: prefer the "script reference sentence": "The corresponding script is located at `joyarm_code/chapt/chapt13/chapt13_endeffector_demo.py`; see the comments at the top of the script for usage."
  · Reusable core library joyarm_code/joyarm_core/: joyarm (end-effector operations go through JoyArm's *_end methods).
  · Figures: place images in docs/assets/joyin-arm/tutorial/images/chapt13_endeffector/ (photos of each end effector + interface/identification sketches); if not ready, use ![Image placeholder: description]().
  · Callouts: > 💡 intuition/mnemonic  |  > 📌 important note/cross-chapter reference  |  > ⚠️ warning/caution.
  · Use relative links for cross-chapter references (e.g. operation in [usage part · end effectors](end.md), the comprehensive project in [Chapter 15](chapt15_project.md)).
  · Use *To be added* for unknown specifications.
  · Do not write a "chapter summary"; the overview on line 3 replaces it.
[Scripts/libraries referenced in this chapter] chapt13_endeffector_demo.py (to be built), joyarm/joyarm.py.
-->

## 1 Two-finger gripper

<!-- ✍️ Key points for this section:
  · Goal: fill in the "principles" of the two-finger gripper (the usage-part end chapter only covers operation): transmission mechanism, position/force control principles, force feedback.
  · Give a "principle key points table" (component | function | principle) + a block diagram of the position/force control principle; reference joyarm/joyarm.py.
  · Closing > 📌: the two-finger gripper is the most basic end effector, and its unified interface specification is the reference for the other end effectors.
-->

## 2 Five-fingered dexterous hand

<!-- ✍️ Key points for this section:
  · Goal: explain the principles and common functions of the five-fingered dexterous hand (independent control of multiple fingers, grasp planning).
  · Add a "dexterous hand specification/function table" (degrees of freedom | drive method | typical grasp modes | interface | notes).
  · ⚠️ Note: the dexterous hand has high control dimensionality and is often combined with the teleoperation of [Chapter 12](chapt12_teleop.md) for teaching grasps.
-->

## 3 Electromagnetic adhesion device

<!-- ✍️ Key points for this section:
  · Goal: explain the principle of electromagnetic adhesion (suitable for ferromagnetic flat parts), power-on/off control, and applicability boundaries.
  · Give a principle sketch + an "electromagnetic adhesion characteristics table" (holding force | power consumption | applicable material | response time | notes).
  · Closing > 💡: electromagnetic adhesion switches cleanly and leaves no residue, but is limited to ferromagnetic materials.
-->

## 4 Pneumatic suction device

<!-- ✍️ Key points for this section:
  · Goal: explain the principle of vacuum pneumatic suction (suction cups), vacuum generation, and applicable scenarios.
  · Give a principle sketch + a "pneumatic suction characteristics table" (suction force | vacuum degree | applicable surface | response time | notes).
  · Compare with electromagnetic adhesion (§3): add an "electromagnetic vs pneumatic suction comparison table" (applicable material | surface requirement | suction force controllability | energy consumption | typical use).
-->

## 5 Vacuum cleaner cleaning device

<!-- ✍️ Key points for this section:
  · Goal: explain the principle and functions of the vacuuming/cleaning device as an end effector (vacuuming, wiping, etc.).
  · Give a brief principle description + a table of applicable scenarios; explain its differences from the standard gripper in terms of interface/power consumption.
-->

## 6 Screw assembly device

<!-- ✍️ Key points for this section:
  · Goal: explain the principle and functions of the automatic screwdriving/assembly end effector (electric screwdriver + feeding mechanism + torque feedback).
  · Add an "assembly device characteristics table" (torque range | speed | feeding method | torque feedback | notes); emphasize the role of torque feedback in tightening judgment (linking to force control in [Chapter 9](chapt9_force.md)).
  · Closing > 📌: assembly end effectors often need 6-axis force sensing at the end effector and are a typical scenario for force-sensing applications.
-->

## 7 Chapter practice: end-effector hot-swap and self-identification verification

<!-- ✍️ Key points for this section:
  · Goal: use scripts to verify the unified interface and self-identification of end effectors (automatic identification of the end-effector type after a hot-swap). The corresponding script is located at `joyarm_code/chapt/chapt13/chapt13_endeffector_demo.py`; see the comments at the top of the script for usage.
  · Suggested structure: hot-swap flow → self-identification result → run results (add ![Image placeholder: end-effector self-identification result]()).
-->
