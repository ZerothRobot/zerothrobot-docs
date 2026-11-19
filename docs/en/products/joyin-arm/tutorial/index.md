# JoyArm robotic arm tutorial

Robotic arm rendering (To be added)

JoyArm is a collaborative robotic arm learning tutorial built around a physical robot, organized into four parts, **Usage, Basics, Advanced, and Applications**: get it running first, then understand the principles, and finally complete an integrated practical task. Every topic comes with reproducible hands-on practice, so it suits readers who are starting from scratch and want to actually build a robotic arm that is easy to use.

Demo animation or video (To be added)


## Features and positioning

| Aspect | Key features | Differs from | Intended readers |
|:---:|:---:|:---:|:---:|
| **Theory** | Essential theory paired with hands-on practice; intuitive concepts | Pure-theory textbooks and piles of formulas | Beginners who want to understand "why" |
| **Practice** | Close to real tasks; reproducible steps | Paper projects detached from a physical robot | Developers who want to build a usable robotic arm |
| **System** | From a single joint to the complete arm; full-stack coverage | Fragmented tutorials that cover only isolated points | Readers who want systematic mastery |


## Project guide

This tutorial's documentation: [JoyArm robotic arm tutorial](https://joyin-dexhand.github.io/joyin_arm_tutorial/)

CAD structural parts and the complete BOM: *To be added* (once ready, see [Usage: Quick start](quick_start.md))

Control code: *repository link*


## Chapter overview

> The tutorial has 4 parts in total: Usage (getting started with operations), Basics (robotics essentials), Advanced (professional depth), and Applications (physical robot applications).

<table>
  <thead>
    <tr>
      <th>Part title</th>
      <th>Chapter title</th>
      <th>Content overview</th>
      <th>Link</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4" align="center"><strong>Usage</strong></td>
      <td align="center">Quick start</td>
      <td align="center">The complete getting-started workflow, from unboxing and inspection through assembly and power-on to running the example programs</td>
      <td align="center"><a href="quick_start">Quick start</a></td>
    </tr>
    <tr>
      <td align="center">Joint motor</td>
      <td align="center">Control a single joint motor with Python/C++ programs</td>
      <td align="center"><a href="motor">Joint motor</a></td>
    </tr>
    <tr>
      <td align="center">Complete robotic arm</td>
      <td align="center">Full-arm hardware parameters, power-on calibration, joint and end-effector control</td>
      <td align="center"><a href="arm">Complete robotic arm</a></td>
    </tr>
    <tr>
      <td align="center">End effector</td>
      <td align="center">Wiring and control of various end effectors (mainly two-finger grippers)</td>
      <td align="center"><a href="end">End effector</a></td>
    </tr>
    <tr>
      <td rowspan="6" align="center"><strong>Basics</strong></td>
      <td align="center">Chapter 1: Introduction to Robots and Robotic Arms</td>
      <td align="center">A quick primer on robot history, classification, and core concepts</td>
      <td align="center"><a href="chapt1_intro">Chapter 1</a></td>
    </tr>
    <tr>
      <td align="center">Chapter 2: Spatial Poses and Forward Position Kinematics</td>
      <td align="center">Pose matrix representation, MDH frame assignment, forward kinematics solution</td>
      <td align="center"><a href="chapt2_fkine">Chapter 2</a></td>
    </tr>
    <tr>
      <td align="center">Chapter 3: Inverse Position Kinematics</td>
      <td align="center">Solvability of inverse solutions; algebraic/geometric/numerical methods</td>
      <td align="center"><a href="chapt3_ikine">Chapter 3</a></td>
    </tr>
    <tr>
      <td align="center">Chapter 4: Velocity Kinematics and Statics</td>
      <td align="center">Velocity propagation, Jacobian, singularity, statics</td>
      <td align="center"><a href="chapt4_jacobian">Chapter 4</a></td>
    </tr>
    <tr>
      <td align="center">Chapter 5: Trajectory Generation</td>
      <td align="center">Trajectory planning in joint space and Cartesian space</td>
      <td align="center"><a href="chapt5_trajectory">Chapter 5</a></td>
    </tr>
    <tr>
      <td align="center">Chapter 6: Motion Control</td>
      <td align="center">Single joint motor control; full-arm position/velocity control</td>
      <td align="center"><a href="chapt6_control">Chapter 6</a></td>
    </tr>
    <tr>
      <td rowspan="4" align="center"><strong>Advanced</strong></td>
      <td align="center">Chapter 7: Configuration Design and URDF Export</td>
      <td align="center">Configuration design, structural design, motor selection, URDF export</td>
      <td align="center"><a href="chapt7_urdf">Chapter 7</a></td>
    </tr>
    <tr>
      <td align="center">Chapter 8: Dynamics and Control</td>
      <td align="center">Newton-Euler recursion, dynamics equations, dynamics-based control</td>
      <td align="center"><a href="chapt8_dyn">Chapter 8</a></td>
    </tr>
    <tr>
      <td align="center">Chapter 9: Force Control</td>
      <td align="center">Pure force control, hybrid force/position control, impedance and admittance control</td>
      <td align="center"><a href="chapt9_force">Chapter 9</a></td>
    </tr>
    <tr>
      <td align="center">Chapter 10: ROS 2</td>
      <td align="center">Workspaces, topic/service communication, moveit2 integration</td>
      <td align="center"><a href="chapt10_ros2">Chapter 10</a></td>
    </tr>
    <tr>
      <td rowspan="5" align="center"><strong>Applications</strong></td>
      <td align="center">Chapter 11: State Monitoring and Safety Protection</td>
      <td align="center">State monitoring and protection at the joint, end-effector, and full-arm levels</td>
      <td align="center"><a href="chapt11_safety">Chapter 11</a></td>
    </tr>
    <tr>
      <td align="center">Chapter 12: Teaching and Teleoperation</td>
      <td align="center">Same-arm, leader-follower isomorphic, and leader-follower non-isomorphic teaching; VR teleoperation</td>
      <td align="center"><a href="chapt12_teleop">Chapter 12</a></td>
    </tr>
    <tr>
      <td align="center">Chapter 13: End Effectors</td>
      <td align="center">Principles and interfaces of grippers, dexterous hands, suction, and other end effectors</td>
      <td align="center"><a href="chapt13_endeffector">Chapter 13</a></td>
    </tr>
    <tr>
      <td align="center">Chapter 14: User Interfaces</td>
      <td align="center">UI, voice, vision, NFC, UWB, motion sensing</td>
      <td align="center"><a href="chapt14_ui">Chapter 14</a></td>
    </tr>
    <tr>
      <td align="center">Chapter 15: JoyArm Integrated Project</td>
      <td align="center">A full-stack integrated project covering perception/planning/control/interaction</td>
      <td align="center"><a href="chapt15_project">Chapter 15</a></td>
    </tr>
  </tbody>
</table>


## Main references and projects

### Main reference books

| Title | Description | Link |
|:---:|:---:|:---:|
| Introduction to Robotics (4th edition) | By John J. Craig. A classic textbook on kinematics, Jacobians, dynamics, and force control; the main theoretical reference for the Basics and Advanced parts of this tutorial | *Please obtain the print or genuine electronic edition yourself* |
| Robotics (4th edition) | By Cai Zixing and Xie Bin (Tsinghua University Press, 2022, ISBN 9787302598220). A classic Chinese textbook widely used in Chinese universities, covering spatial description, kinematics, dynamics, control, and trajectory planning | *To be added* |

### Main reference open-source projects

| Title | Description | Link |
|:---:|:---:|:---:|
| reBot robotic arm | An open-source six-axis robotic arm project by Seeed (6 DOF + gripper): reBot-DevArm provides the complete hardware and software drawings; reBotArm_control_py is a Pinocchio-based Python control library | [DevArm](https://github.com/Seeed-Projects/reBot-DevArm) / [control_py](https://github.com/vectorBH6/reBotArm_control_py) |
| Panthera-HT_SDK | The official C++/Python SDK for the Panthera-HT six-axis robotic arm, supporting position/velocity/torque control, kinematics/dynamics modeling, and leader-follower teleoperation | https://github.com/HighTorque-Robotics/Panthera-HT_SDK |
| Dummy-Robot | A super-mini six-axis robotic arm project by Zhihuijun (peng-zhihui), whose firmware core is kinematic orientation solving; fully open-sourced | https://github.com/peng-zhihui/Dummy-Robot |


## Open-source license

Apache-2.0
