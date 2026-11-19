# Quick start

> 📌 **Overview**: No theory or formulas. Follow the "unboxing and inspection → single-motor setup and testing → full-arm assembly → power-on initialization → running the example programs" workflow to get the robotic arm running quickly. For explanations of the principles behind forward and inverse kinematics, dynamics, planning and control, and so on, see [Basics](chapt1_intro.md), [Advanced](chapt7_urdf.md), and [Applications](chapt11_safety.md).

## 1 Operating safety notes (must read)

> ⚠️ **Please read these notes in full before powering on for the first time; improper operation may damage the robotic arm or cause personal injury!**

| No. | Safety requirement | Description |
|:---:|:---:|:---:|
| 1 | **Keep the workspace clear** | No people or obstacles may be within the arm's reach during operation |
| 2 | **Set the zero position before powering on** | Adjust the robotic arm to a safe pose (zero position) before powering on |
| 3 | **Never force the joints after power-on** | Never force the joints after power-on; this may damage the joint motors |
| 4 | **Cut power immediately in an emergency** | If anything abnormal occurs during operation, press the emergency stop or disconnect the power immediately |

> Note: A DC wireless remote-control switch relay that supports remote control is recommended for more convenient power on/off control.

## 2 Quick start workflow

| Step | Operation | Purpose |
|:---:|:---:|:---:|
| 1 | Unbox and inspect, and check the bill of materials | Ensure all parts are present and undamaged in transit |
| 2 | Set up and debug the joint motors | Assign motor IDs and verify motor functions |
| 3 | Secure the base and assemble the motors and structural parts | Complete the assembly and securing of the full robotic arm |
| 4 | Place the robotic arm at the zero position for calibration (the full-arm version is calibrated at the factory), then debug the full arm | Establish the zero reference for each joint motor and debug the full arm |
| 5 | Run the example program code and start secondary development | Get familiar with and reproduce/verify the full arm's capabilities, and get familiar with the code base |

> Step-by-step quick start videos: *To be added*

## 3 Unboxing inspection and bill of materials check (to be updated further: refer to the video in Section 2)

Photo of all parts (arranged in groups with labels)

| Category | Name | Quantity | How to obtain | Remarks |
|:---:|:---:|:---:|:---:|:---:|
| Structural part | Base structure | 1 | *purchase/print link* | *parameters* |
| Structural part | Link structure | 6 | *purchase/print link* | *parameters* |
| Actuator | Joint motor | 6 | *purchase link* | None |
| End effector | Two-finger gripper | 1 | *purchase link* | See [End effector](end.md) |
| Cable module | USB-to-CAN | 1 | *purchase link* | None |
| Power supply | DC power supply | 1 | *purchase link* | For voltage specifications, see [Full arm](arm.md) |

## 4 Setting up and debugging the joint motors (to be updated further: refer to the video in Section 2)

Photo of the single-motor test wiring + screenshot of the host computer software interface

| Step | Test item | Test method | Demonstration image |
|:---:|:---:|:---:|:---:|
| 1 | Host computer installation | Install and start the host computer software for testing and motion visualization | *To be added* |
| 2 | Power-on and communication setup | Connect the power and signal cables, and confirm the bus can send and receive data | *To be added* |
| 3 | Motor ID read/write | Read and set the unique motor ID | *To be added* |
| 4 | Motor zero-position setting | Calibrate the motor zero angle as the reference for position control | None |
| 5 | Command read | Verify that the command read function works properly | *To be added* |
| 6 | Enable/disable | Send the enable command; the motor enters the servo-locked state | *To be added* |
| 7 | Position control | Send the target angle and observe whether it reaches the position accurately | *To be added* |
| 8 | Velocity control | Send the target velocity and observe the rotation direction and speed | *To be added* |
| 9 | Torque feedback | Stall or load the motor, and read the real-time output torque | *To be added* |
| 10 | State feedback | Read state quantities such as temperature, voltage, current, and fault codes | *To be added* |

## 5 Full-arm assembly (to be updated further: refer to the video in Section 2)

| Step | Operation | Details | Schematic |
|:---:|:---:|:---:|:---:|
| 1 | Install and secure the base | Provide a stable mounting reference for the whole arm | *To be added* |
| 2 | Install motor 1 and link 1 | Assemble the first-axis joint and link | *To be added* |
| 3 | Install motor 2 and link 2 | Assemble the second-axis joint and link | *To be added* |
| 4 | Install motor 3 and link 3 | Assemble the third-axis joint and link | *To be added* |
| 5 | Install motor 4 and link 4 | Assemble the fourth-axis joint and link | *To be added* |
| 6 | Install motor 5 and link 5 | Assemble the fifth-axis joint and link | *To be added* |
| 7 | Install motor 6 and link 6 | Assemble the sixth-axis joint and link | *To be added* |
| 8 | Install the end effector | Connect the gripper and other end effectors so the arm can perform tasks | *To be added* |
| 9 | Check that the full arm moves smoothly | Confirm that all fasteners are in place and the joints turn smoothly | *To be added* |
| 10 | Route and secure the cables | Prevent cables from being pulled or pinched during motion, and ensure reliable power and communication | *To be added* |

## 6 Full-arm initialization, calibration, and debugging (to be updated further: refer to the video in Section 2)

### 6.1 Connection, power-on, and self-check

After the full arm is assembled, follow the standard procedure and complete the self-check at first power-on to ensure every joint is in a normal state.

Full-arm power-on wiring + host computer self-check interface

Robotic arm zero pose

| Step | Operation | Action | Demonstration image |
|:---:|:---:|:---:|:---:|
| 1 | Install and start the host computer software | For testing and motion visualization | *To be added* |
| 2 | Place the robotic arm in the zero pose | Keep the stable zero pose to prevent unexpected movement | *To be added* |
| 3 | Connect the power and communication cables | Supply power and establish the communication link | *To be added* |
| 4 | Scan the bus from the host computer and identify all motors | Confirm that all joints communicate normally | *To be added* |
| 5 | Read the motor states | Check that temperature, voltage, current, and fault codes are all normal | *To be added* |
| 6 | Joint motor zero-position calibration | After the communication link is established, perform full-arm zero-position calibration through the host computer | *To be added* |

> 📌 The full-arm version is zeroed at the factory, so you can skip this step; however, zeroing must be repeated after disassembly and reassembly or after replacing a motor.

### 6.2 Full-arm function debugging

| Step | Specific operation | Purpose | Demonstration image |
|:---:|:---:|:---:|:---:|
| 1 | Power-on and self-check | Complete power supply and state checks for the whole arm | None |
| 2 | Make sure the robotic arm is in the zero pose | Bring every joint near the zero position | *To be added* |
| 3 | Run the automatic zero-position calibration function or program | Calibrate the zero position of each joint | *To be added* |

## 7 Running the example programs (to be updated further: refer to the video in Section 2)

### 7.1 Environment setup (first time only)

The following example programs all run in the `joyarm_code/` directory; complete the environment setup first before the first use:

```bash
cd ~
# Clone this tutorial repository (joyarm_code/ is the accompanying code library subdirectory inside it, not a standalone repository)
git clone https://github.com/joyin-dexhand/joyin_arm_tutorial.git
cd joyin_arm_tutorial/joyarm_code   # Enter the accompanying code library directory (all subsequent example commands run here)
curl -LsSf https://astral.sh/uv/install.sh | sh # If uv is not installed on your computer, install it first; skip this if it is already installed
uv sync                    # Create the environment and install all dependencies
```

> ⚠️ Before running a physical robot example, be sure to read §1 Operating safety notes.

### 7.2 Overview of all example programs

The quick start example programs are located in `joyarm_code/quick_start/`; commands must be run from the `joyarm_code/` directory; the description of each example's features and how to run it are in the comment documentation at the top of the corresponding code file.

| Example | Requirements | Launch command | Description |
|:---:|:---:|:---:|:---:|
| 01 Object creation and information printing | Offline | `uv run python quick_start/01_arm_create_and_print.py <model>` | Calls listArm() to list all available models, creates a JoyArm object with a model specified interactively or via a command-line argument, and prints core information such as joints, limits, characteristic configurations, and the six-domain solvers in a formatted form |
| 02 Hardware connection and state reading | Physical robot | `uv run python quick_start/02_connect_and_read_state.py <model>` | Connects to and enables the body and end-effector motor buses, reads joint states, fault codes, and motor parameters with two read methods for comparison, and never commands motion |
| 03 Zeroing and parameter settings | Physical robot | `uv run python quick_start/03_set_zero_and_params.py <model>` | After connecting, the arm/end families of get_error / check_error / clear_error for querying and clearing errors, set_zero_arm / end zeroing, and a pos_kp motor parameter "read original value → write new value → read back to verify" demo (each action runs only after you type yes to confirm and is skipped by default) |
| 04 Direct hardware motor commands | Physical robot | `uv run python quick_start/04_direct_motor_command.py <model>` | Direct hardware motor access while the FSM is not running: position/velocity/MIT mode commands (on both the arm and end sides), end-effector gripper actions, and notes on mutual exclusion with the FSM |
| 05 Online robotics computation and solver settings | Physical robot | `uv run python quick_start/05_robotics_solvers_and_math.py <model>` | The six domains' 18 solver methods and hot-swapping; robotics math computations (q/dq and other parameters default to the physical robot's cached state); in-position checks and random joint-angle sampling; a gravity compensation demo |
| 06 Motion based on the motion state machine | Physical robot | `uv run python quick_start/06_fsm_motion.py <model>` | Starts the motion state machine and waits for it to transition automatically to MOTION, sends joint and Cartesian targets for actual motion, and demonstrates switching via the HOLD event and returning to zero to finish |
| 07 Safety monitor | Physical robot | `uv run python quick_start/07_safety_monitor.py <model>` | Runs as a single script: it first starts the FSM automatically inside the example, then attaches a custom overspeed rule that triggers DAMP damping protection, demonstrating the reason for the intervention and the recovery process (no need to open another terminal and run 06 first) |
| 08 Teaching and trajectory replay | Physical robot | `uv run python quick_start/08_teach_replay.py <model>` | Sends a DAMPING event to switch to damped mode for drag teaching, records the joint trajectory at 50 Hz, and replays it by sampling frames as waypoints and sending them point by point |
| 09 Integrated pick-and-place demo | Physical robot | `uv run python quick_start/09_pick_and_place.py <model>` | Uses solve_fkine / solve_ikine to construct the point above and the grasp point, moves under FSM control plus opening/closing the gripper, and completes the pick-and-place closed loop |

## 8 Complete resource summary

| Item | Description | Link |
|:---:|:---:|:---:|
| Tutorial documentation | This tutorial site | [joyin-dexhand.github.io/joyin_arm_tutorial](https://joyin-dexhand.github.io/joyin_arm_tutorial/) |
| BOM list | Robotic arm 3D model and drawings | *To be added* |
| Control code | Motor control and example source code | *To be added* |
| Motor documentation | Official motor vendor documentation and code | *To be added* |
