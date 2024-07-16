#! /usr/bin/python3

import json
import os
import sys

usage = """
Usage:
    ./genimg <version>

    <version> in format of vX.Y.Z, e.g.:
    ./genimg v0.0.30
"""

docker_image_name = "registry.cn-hangzhou.aliyuncs.com/devlab/anyui-homepage"

step: int = 0

def git_clone(version: str):
    return os.system("git clone ~/src/hmi/lvgl-guider/.git {}".format(version))


def git_checkout():
    """Checkout to master branch"""
    global step
    step += 1
    print(f">>>> {step}. Checkout master")
    return os.system("git checkout master")


def chdir(version: str):
    global step
    step += 1
    print(f">>>> {step}. Change directory to {version}")
    return os.chdir(version)


def check_versions(version):
    package = json.load(open('package.json', 'r'))
    if (package['version'] != version[1:]):
      print("Version mismatch: package.json version is %s, but %s is given" % (package['version'], version[1:]))
      return True
    return False

def install_packages():
    global step
    step += 1
    print(f">>>> {step}. Installing packages ...")
    return os.system("yarn")


def build_image():
    global step
    step += 1
    print(f">>>> {step}. Start compiling ...")
    return os.system("yarn build")


def git_tag(version: str):
    global step
    step += 1
    print(f">>>> {step}. Git tag {version}")
    return os.system("git tag {}".format(version))


def git_pushtags():
    global step
    step += 1
    print(f">>>> {step}. Pushing to remote with tags ...")
    return os.system("git push --tags")


def docker_login():
    global step
    step += 1
    print(f">>>> {step}. Docker login to registry.cn-hangzhou.aliyuncs.com")
    return os.system(
        "docker login --username=devan.xu@foxmail.com registry.cn-hangzhou.aliyuncs.com"
    )


def docker_genimg(version: str):
    image_name = get_docker_image_name(version)

    global step
    step += 1
    print(f">>>> {step}. Generating docker image {image_name}")
    return os.system("docker build -t {} .".format(image_name))


def docker_pushimg(version: str):
    image_name = get_docker_image_name(version)
    global step
    step += 1
    print(f">>>> {step}. Pushing docker image {image_name} to remote ...")
    return os.system("docker push {}".format(image_name))


def get_docker_image_name(version: str):
    return f"{docker_image_name}:{version}"


def start_process(version: str):
    """
    @desc: To make a completely clean build:
    - Clone source code to folder {version}
    - Change current dir to {version}
    - Install packages
    - Compile TS source
    - Generate docker image
    - Push image
    - Make a tag
    - Push tags to remote
    """
    return (
        # docker_login()
        # or git_clone(version)
        # or chdir(version)
        # or git_checkout()
        # check_versions(version)
        # or install_packages()
        build_image()
        or docker_genimg(version)
        or docker_pushimg(version)
        # or git_tag(version)
        # or git_pushtags()
    )


def main(version: str):
    return start_process(version)


if __name__ == "__main__":
    args = sys.argv
    if len(args) != 2:
        os.system(
            f"docker images | grep {docker_image_name}:v"
        )
        print(usage)
    else:
        main(args[1])
