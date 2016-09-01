#!/usr/bin/env python3

import subprocess
import threading
import time
import psutil

def spawn(args, name=None):
    if name is not None:
        print("Starting '{}'".format(name))
    cmdl = "cmd /c {}".format(args)
    devnull = subprocess.DEVNULL 
    return subprocess.Popen(cmdl, stdin=devnull)

def kill(pid, name=None):
    if name is not None:
        print("Killing '{}'".format(name))
    parent = psutil.Process(pid)
    for child in parent.children(recursive=True):
        child.kill()
    parent.kill()

def wait(secs):
    print("Waiting {}s".format(secs))
    time.sleep(5)

def pause():
    print("Press <enter>...")
    _ = input()

fable = spawn(".\\node_modules\\.bin\\fable -w", "Fable").pid
webpack = spawn(".\\node_modules\\.bin\\webpack --watch", "Webpack").pid
server = spawn(".\\node_modules\\.bin\\http-server ./public", "Server").pid

wait(5)
pause()

kill(fable, "Fable")
kill(webpack, "Webpack")
kill(server, "Server")

print("Done.")
