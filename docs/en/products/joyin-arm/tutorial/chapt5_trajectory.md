# Chapter 5: Trajectory Generation

> 📌 **Overview**: Implement automatic trajectory generation, for example, automatically generating a trajectory from a given end-effector pose. This chapter introduces joint-space planning and Cartesian-space planning, and puts both into practice on JoyArm.

<!-- ✍️ Writing guide (HTML comment, not rendered on the site; may be kept or deleted once the draft is complete)

[Chapter positioning] Basic part · theory + practice chapter, following the kinematics of [Chapter 2](chapt2_fkine.md) and the inverse kinematics of [Chapter 3](chapt3_ikine.md), and providing the "trajectory" input for motion control in [Chapter 6](chapt6_control.md).
[Reference template] Align with chapt2_fkine.md (the most complete theoretical chapter template): mathematical derivation + an end-of-chapter "chapter practice" structure.
[Fixed skeleton]
  · Line 1: H1 chapter title (chapter number written as 'Chapter N'); line 3 must be a "> 📌 **Overview**: ..." blockquote summary
    (no heading level, a one-sentence summary of the whole chapter, bold keywords, the logical flow of each section, and the practice in the last section).
  · The body expands as ## → ### → ####, with no separator lines between top-level ## headings.
  · The last section is fixed as "## 3 Chapter practice: JoyArm joint-space and Cartesian-space trajectory generation", corresponding to the script joyarm_code/chapt/chapt5/chapt5_trajectory_demo.py.
[Global writing conventions] (see AGENTS.md for details)
  · Concise, clear, and beginner-friendly; avoid leaps.
  · Center all tables with `:---:` (write it for every column); no need to confirm with the user.
  · Heading numbering: H2 uses Arabic numerals restarting from 1 in each chapter; H3 is "parent H2.index"; chapter numbers are written as 'Chapter N'.
  · Math: inline $...$ and display $$...$$; time notation $q(t)$, $t\in[t_0,t_f]$; polynomial coefficients with subscripts $a_i$.
  · Code: prefer the "script reference sentence": "The corresponding script is located at `joyarm_code/chapt/chapt5/chapt5_trajectory_demo.py`; see the comments at the top of the script for usage."
  · Reusable core library joyarm_code/joyarm_core/: trajectory / fkine / ikine.
  · Figures: place images in docs/assets/joyin-arm/tutorial/images/chapt5_trajectory/; if not ready, use ![Image placeholder: description]().
  · Callouts: > 💡 intuition/mnemonic  |  > 📌 important note/cross-chapter reference  |  > ⚠️ warning/caution.
  · Use *To be added* for unknown values; use relative links for cross-chapter references (e.g. [Chapter 4](chapt4_jacobian.md)).
  · Do not write a "chapter summary"; the overview on line 3 replaces it.
[Scripts/libraries referenced in this chapter] chapt5_trajectory_demo.py (to be built), robotics/trajectory/, robotics/fkine/, robotics/ikine/.
-->

## 1 Joint-space planning

<!-- ✍️ Key points for this section:
  · Goal: explain interpolation planning in joint space: smoothly passing through several waypoints.
  · There are already three methods (cubic/quintic polynomial and linear with parabolic blends); suggest organizing them into a "comparison table of the three interpolation types"
    (method | position continuity | velocity continuity | acceleration continuity | joint impact | applicable scenario).
  · Give the derivation and formulas of the key polynomials (e.g. the quintic polynomial $q(t)$ and its coefficient solution conditions), with ![Image placeholder: comparison of three types of joint trajectory curves]().
  · Closing > 💡: joint-space planning inherently has no singularity/unreachability problems (it does not pass through Cartesian space), and is the most reliable planning approach.
-->

* Cubic polynomial
* Quintic polynomial
* Linear function with parabolic blends

## 2 Cartesian-space planning

<!-- ✍️ Key points for this section:
  · Goal: explain path planning in Cartesian space (the end-effector pose space), which is then converted to joint space through IK for execution.
  · There are already three path types (straight line/circular arc/smooth) plus a problem note (keep the original text); suggest organizing the paths into a table
    (path type | mathematical description | typical use | notes), then expanding each in a subsection.
  · ⚠️ Keep and expand the existing "Cartesian planning problems" note (unreachable points/singularities with excessive joint velocity/multiple solutions), emphasizing the connection with §3 singularity in [Chapter 4](chapt4_jacobian.md).
  · Closing > 📌: the difficulty of Cartesian planning essentially comes from IK and singularity (see [Chapter 3](chapt3_ikine.md) and [Chapter 4](chapt4_jacobian.md)).
-->

* Straight-line path
* Circular-arc path
* Smooth trajectory

Problems in Cartesian planning: unreachable points, excessive joint velocities at singularities, and multiple solutions (take the nearest when finite, optimize when infinite).

## 3 Chapter practice: JoyArm joint-space and Cartesian-space trajectory generation

<!-- ✍️ Key points for this section:
  · Goal: generate joint-space trajectories and Cartesian-space trajectories on JoyArm and compare them (visualize the end-effector path and the joint curves).
  · Suggested structure: give several waypoints → joint-space planning → Cartesian-space planning (straight line/circular arc) → visual comparison → discuss the effects of singularity/multiple solutions.
  · The main body is script practice; use the script reference sentence: "The corresponding script is located at `joyarm_code/chapt/chapt5/chapt5_trajectory_demo.py`; see the comments at the top of the script for usage."
  · You may add > 💡: real projects often mix "Cartesian planning + joint-space smooth transition" to combine intuitiveness and reliability.
-->
