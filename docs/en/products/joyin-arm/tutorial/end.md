# End effector

> 📌 **Overview**: For readers who want to start using it right away, this chapter covers only the operation steps for the various end effectors (mainly the two-finger gripper) and does not explain the theory (for theory, see [Chapter 13](chapt13_endeffector.md) in the applications part).

<!-- ✍️ Writing guide (HTML comment, not rendered online; can be kept or deleted once the chapter is finalized)

[Chapter positioning] Usage part · operation chapter ("want to start using it right away"; covers various end effectors such as the two-finger gripper and the dexterous hand, with the two-finger gripper as the main hands-on subject; only operation steps are given, and the theory is left to Chapter 13 in the applications part).
[Reference template] Align with quick_start.md (quick start, the most complete model for the usage part / operation chapter).
[Fixed skeleton]
  · Line 1: H1 chapter title (no chapter number in the usage part); line 3 must be a "> 📌 **Overview**: ..." blockquote summary
    (one-sentence summary of the whole chapter, bold key terms, indicate the logical flow of each section).
  · Body text expands as ## → ###, with no horizontal rule between top-level ## headings.
  · The usage part is centered on "operation steps" and does not expand theory; prefer step flow tables / bill of materials tables.
[Global writing conventions] (see AGENTS.md for details)
  · Concise, clear and beginner-friendly, without jumps.
  · All tables are centered with `:---:` (written for every column); no need to confirm with the user.
  · Heading numbering: H2 restarts from Arabic numeral 1 in each chapter; H3 is "parent H2.serial number".
  · Code: prefer the "script reference phrasing" — "The corresponding script is located at `joyarm_code/chapt/xxx.py`; see the comments at the head of the script for usage."
  · Reusable core library joyarm_code/joyarm_core/: joyarm (end-effector *_end facade: set_action_end(action, **kw), where the actions are open / home / close / position; an unknown action or a missing position argument only warns and does not raise; send_position_end(q, vlim, flim)).
  · Figures: place figures in docs/assets/joyin-arm/tutorial/images/end/; if not ready, use ![Image placeholder: description]().
  · callout: > 💡 intuition/mnemonic  |  > 📌 important notes/cross-chapter references  |  > ⚠️ warning/note.
  · Use *To be added* for unknown values; use relative links for cross-chapter references: [Chapter 13](chapt13_endeffector.md).
  · Do not write a "chapter summary" — the overview on line 3 replaces it.
[Scripts/libraries referenceable in this chapter] joyarm_code/joyarm_core/joyarm/joyarm.py.
-->

## 1 Hardware preparation

<!-- ✍️ Key writing points for this section:
  · Goal: let the reader gather all materials and understand the gripper interface.
  · Two points already exist (two-finger gripper image, mounting interface description); consider organizing them into a "bill of materials" table (Material | Specification/Model | Quantity | Purpose | Physical image).
  · Include a physical image of the gripper and an image of the mounting interface, placed in docs/assets/joyin-arm/tutorial/images/end/; if not ready, use ![Image placeholder: ...]().
-->

* Two-finger gripper (image)
* Mounting interface description

## 2 Wiring and power-on

<!-- ✍️ Key writing points for this section:
  · Goal: safely complete gripper wiring and power-on.
  · Use a step flow table as the main body (Step | Specific operation | Purpose | Demonstration image), following the format of quick_start §6.
  · ⚠️ A warning callout about the power-on sequence / wiring polarity must be added (> ⚠️ Incorrect wiring may damage the driver board).
-->

## 3 Gripper control

<!-- ✍️ Key writing points for this section:
  · Goal: let the reader master the two basic gripper control methods.
  · Two points already exist (position control, force control); consider organizing them into a "position control vs force control" comparison table
    (Mode | Control variable | Applicable scenarios | Key parameters | Notes).
  · Reference joyarm/joyarm.py and use the script reference phrasing to describe the call examples.
-->

* Position control
* Force control

## 4 Common examples

<!-- ✍️ Key writing points for this section:
  · Goal: provide 2–3 reproducible examples (such as grasping a regular object, releasing, and moving while holding an object stably) so that the reader can get started quickly.
  · For each example give "Goal → Operation steps → Expected result", with physical/demonstration images.
  · You may add > 💡: when moving while holding an object, prefer force control to avoid the object slipping or being crushed.
-->

## 5 Accessories and references

<!-- ✍️ Key writing points for this section:
  · Goal: collect reference materials and further reading.
  · A table is suggested (Material | Type | Link/Location | Description): including the gripper theory (relative link to [Chapter 13](chapt13_endeffector.md)),
    the joyarm/joyarm.py source code, vendor manuals, companion scripts, and so on.
-->
