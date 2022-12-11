---
slug: "first-coding-environment-setup"
date: "2022-12-09"
title: "Setting up your first coding environment"
hero: {
    txt: '',
    prerequisites: "Using interactive websites on browsers.;Basic knowledge to install a program from a wizard based installer.",
    setup: "A computer with Linux (preferrably Debian or Ubuntu), Windows or MacOS;An active internet connection.",
    lesson: "Install Visual Studio Code;Install Compilers for C and C++;Set up a workspace in vscode"
}
---

## Introduction
To make a computer program, one typically starts by writing the [source code](https://en.wikipedia.org/wiki/Source_code) in a text editor, compiling it into a binary and finally running the program.  
Now all of this can be done if you have: 
* a text editor (like Notepad in windows)
* a command line terminal (command prompt) and
* a compiler or interpreter depending on the language.  

An [Integrated Development Environment (IDE)](https://en.wikipedia.org/wiki/Integrated_development_environment) is an application that provides all these tools in a single place. A typical IDE contains source code editor, terminal, file browser and a debugger. There are many IDEs available out there but I will be installing [Visual Studio Code](https://code.visualstudio.com/) which is free and open-source and developed by Microsoft. 

## Downloading and Installing VSCode

VSCode is available on Windows, Linux and MacOS platforms. [Download the vscode installer](https://code.visualstudio.com/Download) for your platform.

In windows, you need to run the installer and follow the wizard, in MacOS, you have to move the application downloaded to the applications folder.  

For Ubuntu or other Debian based systems, you can install using `apt` in the terminal.

```shell
cd Downloads
sudo apt-get install ./code_<version>.deb
```

## Installing C/C++ compilers 

Now that you have vscode installed, you will be able to write your code. All you need is a compiler to compile that source code into machine language program which will then run on the computer.

For C/C++, we will be using the [GNU Compilers (`gcc` and `g++`)](https://en.wikipedia.org/wiki/GNU_Compiler_Collection) on Windows and Linux.

### GCC on Linux (Ubuntu or Debian) 

To verity whether GCC is installed, open a terminal window and enter the command 

```shell
gcc -v
```

If GCC isn't installed, update your system's package list and install the GNU compiler tools and the GDB debugger with this command:

```shell
sudo apt-get update
sudo apt-get install build-essential gdb
```

### GCC on Windows using MSYS 

Get the latest version of Mingw-w64 (Minimal GNU for Windows) via MSYS2. Mingw is a toolset which provides GNU softwares for windows including GCC. [Download the MSYS2 installer](https://github.com/msys2/msys2-installer/releases/download/2022-01-18/msys2-x86_64-20220118.exe). Open the installer and follow the wizard to complete installation. Check the *run MSYS2 64bit now* checkbox in the end and click on Finish.

In the MSYS command line window, update package databases and base packages.
```shell
pacman -Syu
```

Run "MSYS2 MSYS" from start menu and update the rest of the base packages.
```shell
pacman -Syu
```

Now MSYS2 is ready to install packages. Install mingw-w64 GCC to start compiling:
```shell
pacman -S --needed base-devel mingw-w64-x86_64-toolchain
```

### Clang on MacOS

In MacOS, we will use Clans/LLVM compiler. To check whether it is installed, run the following command in terminal

```shell
clang --version
```

If Clang isn't installed, install the command line developer tools by entering the command in terminal

```shell
xcode-select --install
```

## Getting familiar with VSCode 

### VS Code User Interface 

![VS Code UI](../static/media/posts/vscode-ui-overview.png)

VS Code UI is divided into five areas:
* **Editor** - The main area to edit your files. Multiple editors (files) can be opened side by side.
* **Side bar** - Contains different views like Explorer, Source Control, Search, Run and Debug, Extensions
* **Status Bar** - Information about opened project and files you edit.
* **Activity Bar** - Enables to switch between different views.
* **Panels** - Contains the integrated terminal, output panel, debug console and problems panel which shows errors and warnings. It can be moved to right. 

> **Tip:** Toggle the panel using <kbd>Ctrl</kbd>-<kbd>J</kbd> or <kbd>⌘</kbd>-<kbd>J</kbd> shortcut.  
Toggle the **integrated terminal**, using <kbd>Ctrl</kbd>-<kbd>\`</kbd> or <kbd>⌘</kbd>-<kbd>\`</kbd> shortcut.  

### Activity Bar 
![Activity bar context menu](../static/media/posts/activity-bar-context-menu.png)

It lets you switch between different views. Buttons can be added or removed and their order can be changed by dragging them. To hide the view (side bar) from screen, press <kbd>Ctrl</kbd>-<kbd>B</kbd> on Windows or <kbd>⌘</kbd>-<kbd>B</kbd> on MacOS.

### Command palette 

![Command Palette](../static/media/posts/command-palette.png)

Anything on vscode can be done with the Command Palette which can be accessed with <kbd>Ctrl</kbd>-<kbd>Shift</kbd>-<kbd>P</kbd> on Windows or with <kbd>⌘</kbd>-<kbd>Shift</kbd>-<kbd>P</kbd> on MacOS. 

>**Tip:** Using <kbd>Ctrl</kbd>-<kbd>P</kbd> on windows or <kbd>⌘</kbd>-<kbd>P</kbd> on MacOS can be used for navigating to any file or symbol by typing its name

## Configuring VSCode 

### Install the extensions 
Install C/C++ extension to enable support for C/C++ development which includes syntax highlighting, autocomplete suggestions, automated build and debugging etc.

#### Installing from command pallete
Open vscode. The extension can also be installed by the command in the command pallete (<kbd>Ctrl</kbd>-<kbd>Shift</kbd>-<kbd>P</kbd>):
```
ext install ms-vscode
```

#### Installing from the Extensions view
1. Open VSCode
1. Select extensions view from the activity bar in the left
1. Search for **C/C++** in the extensions view and select the one provided by Microsoft.
1. Install the extension by clicking on the install button.

### Create projects folder 
Create a folder (say projects/) where you'll be saving all your codes and open that folder in vscode. 
1. Open vscode 
1. In the menu bar, select the **File** option.
1. Click on **Open Folder...**
1. Browse the system to open the folder you just created. This folder now becomes your workspace.

## Writing your first program 

### Writing code
In the **File Explorer** view, hover over your folder name and four action icons will appear. Click on the 'New file' icon.
Set the filename to `hello.c`.
Write the hello world program in C in `hello.c` file.
```C
#include <stdio.h>

int main(void)
{
    printf("hello, world\n");
    return 0;
}
```

When writing the code you'll notice that vscode is showing you autocomplete suggestions and syntax highlighting. C/C++ extension provides this feature.

Save changes to your file (<kbd>Ctrl</kbd>-<kbd>S</kbd> in windows and <kbd>⌘</kbd>-<kbd>S</kbd> in macos).

### Compilation 

#### Using `gcc` CLI from vscode terminal (recommended for learners)
In the menu bar, click on **Terminal** followed by **New Terminal** (<kbd>Ctrl</kbd>-<kbd>\`</kbd> in windows or <kbd>⌘</kbd>-<kbd>\`</kbd> on macos). This will open a new terminal within the folder currently opened in vscode.  
The most basic syntax for `gcc` cli is

```shell
gcc srcfile.c -o outfile
```

* `srcfile.c` is the source file, which is `hello.c` here
* `-o` meaning 'out' is an option to gcc. It places the compilation output into the filename which follows it i.e. `outfile`.
* `outfile` is the executable of binary file which is the final program that runs on the machine.
    * In windows, every executable has a .exe [filename extension](https://en.wikipedia.org/wiki/Filename_extension). So if you are using windows, compile using
        ```shell
        gcc hello.c -o hello.exe
        ```
        The output file in windows will thus be `hello.exe`

    * In Linux or MacOS, there is no need for a filename extension. Compile using
        ```shell
        gcc hello.c -o hello
        ```
        The output file is `hello`
    
#### Compilation using **vscode tasks**
1. In the menu bar, select **Terminal** followed by **Configure Default Build Task...** 
1. Select the default compiler for compiling all C source codes i.e. `gcc` in this case.
1. A new `task.json` file will be created in `.vscode` folder where the default compiler and some other configurations will be set. Compilation can be customized further from this file. Close this file and return to `hello.c` in vscode.
1. Now you can compile any C source code by keeping it open in vscode and pressing <kbd>Ctrl</kbd>-<kbd>Shift</kbd>-<kbd>B</kbd> in windows or <kbd>⌘</kbd>-<kbd>Shift</kbd>-<kbd>B</kbd> in macos.

After compilation, notice in the **Explorer** view (<kbd>Ctrl</kbd>-<kbd>Shift</kbd>-<kbd>E</kbd> in windows or <kbd>⌘</kbd>-<kbd>Shift</kbd>-<kbd>E</kbd> in macos if it is not open), the executable file has been created. 

### Executing the program 

Open the vscode integrated terminal <kbd>Ctrl</kbd>-<kbd>\`</kbd> or <kbd>⌘</kbd>-<kbd>\`</kbd> and run the executable file, the output will print just below the prompt:

In Linux/MacOS:
```shell
./hello
hello world
```

In Windows
```shell
./hello.exe
hello world
```

## Writing more programs 

With the workspace setup, you can now create another source file from **File Explorer** view, write some code, compile it from the terminal or using <kbd>Ctrl</kbd>-<kbd>Shift</kbd>-<kbd>B</kbd> or <kbd>⌘</kbd>-<kbd>Shift</kbd>-<kbd>B</kbd> and run the program by running `filename.exe` or simply `filename`.

e.g. creating a `helloagain.c` program will be like this:
```C
#include <stdio.h>

int main(void)
{
    printf("hello again world!\n");
    return 0;
}
```

and then compilation and execution

```shell
gcc helloagain.c -o helloagain
./helloagain
hello again world!
```

## References 

This article was made possible with the help of [Visual Studio code docs](https://code.visualstudio.com/docs/) Visit this documentation page to learn more about vscode features like debugging and configuration. 

