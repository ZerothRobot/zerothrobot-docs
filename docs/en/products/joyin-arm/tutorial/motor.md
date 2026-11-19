# Joint motor

> 📌 **Overview**: Describes how to control a single joint motor with Python and C++ programs.

## 1 Hardware preparation

* USB-to-CAN cable (image)
* *To be added* robotic arm (image)

## 2 Environment setup (Python)

### 2.1 Install uv

This tutorial uses [uv](https://docs.astral.sh/uv/) throughout to manage the Python virtual environment and dependencies.

**Linux**

    curl -LsSf https://astral.sh/uv/install.sh | sh

**Windows PowerShell**

    irm https://astral.sh/uv/install.ps1 | iex

### 2.2 Clone the code

```shell
git clone *To be added*
cd joyin_arm_tutorial/joyarm_code
```

### 2.3 Create the environment and install dependencies

```shell
uv sync   # create .venv + install all dependencies from uv.lock + editable install of joyarm_core
source .venv/bin/activate
```
