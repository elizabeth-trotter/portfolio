
"use client";

import { Button, CustomFlowbiteTheme, Drawer, Flowbite, Sidebar, TextInput } from "flowbite-react";
import { useState } from "react";
import {
    HiChartPie,
    HiClipboard,
    HiCollection,
    HiInformationCircle,
    HiLogin,
    HiPencil,
    HiSearch,
    HiShoppingBag,
    HiUsers,
    HiOutlineExternalLink
} from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { SiCodewars } from "react-icons/si";

const customDrawerTheme: CustomFlowbiteTheme["drawer"] = {
    "root": {
        "base": "fixed z-40 overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800",
        "backdrop": "fixed inset-0 z-30 bg-gray-900/50 dark:bg-gray-900/80",
        "edge": "bottom-16",
        "position": {
            "top": {
                "on": "left-0 right-0 top-0 w-full transform-none",
                "off": "left-0 right-0 top-0 w-full -translate-y-full"
            },
            "right": {
                "on": "right-0 top-0 h-screen w-80 transform-none",
                "off": "right-0 top-0 h-screen w-80 translate-x-full"
            },
            "bottom": {
                "on": "bottom-0 left-0 right-0 w-full transform-none",
                "off": "bottom-0 left-0 right-0 w-full translate-y-full"
            },
            "left": {
                "on": "left-0 top-0 h-screen w-3/4 transform-none",
                "off": "left-0 top-0 h-screen w-3/4 -translate-x-full"
            }
        }
    },
    "header": {
        "inner": {
            "closeButton": "absolute end-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
            "closeIcon": "h-4 w-4",
            "titleIcon": "me-2.5 h-4 w-4",
            "titleText": "mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
        },
        "collapsed": {
            "on": "hidden",
            "off": "block"
        }
    },
    "items": {
        "base": ""
    }
};


export function NavbarDrawerComponent(props: { isDarkMode: boolean, isOpen: boolean, handleClose: () => void }) {


    return (
        <Flowbite>
            <Drawer theme={customDrawerTheme} open={props.isOpen} onClose={props.handleClose} className="bg-[#faf0e6] font-josefin-sans">
                <Drawer.Header title="Elizabeth Trotter" titleIcon={() => <></>} />
                <Drawer.Items>
                    <Sidebar
                        aria-label="Sidebar with multi-level dropdown example"
                        className="[&>div]:bg-transparent [&>div]:p-0"
                    >
                        <div className="flex h-full flex-col justify-between py-2">
                            <div>
                                <Sidebar.Items>
                                    <Sidebar.ItemGroup>
                                        <Sidebar.Item href="#about" icon={HiUsers} onClick={props.handleClose}>
                                            About
                                        </Sidebar.Item>
                                        <Sidebar.Item href="#skills" icon={HiClipboard} onClick={props.handleClose}>
                                            Skills
                                        </Sidebar.Item>
                                        <Sidebar.Item href="#projects" icon={HiCollection} onClick={props.handleClose}>
                                            Projects
                                        </Sidebar.Item>
                                    </Sidebar.ItemGroup>
                                    <Sidebar.ItemGroup>
                                        <Drawer.Header title="Connect" titleIcon={HiOutlineExternalLink} className="pt-10" />
                                        <Sidebar.Item href="mailto:elizabeth.dev.inquiry@gmail.com" icon={MdOutlineAlternateEmail}>
                                            Email
                                        </Sidebar.Item>
                                        <Sidebar.Item href="https://github.com/et120" target='_blank' icon={BsGithub}>
                                            GitHub
                                        </Sidebar.Item>
                                        <Sidebar.Item href="https://www.linkedin.com/in/elizabeth-trotter" target='_blank' icon={FaLinkedinIn}>
                                            LinkedIn
                                        </Sidebar.Item>
                                        <Sidebar.Item href="https://www.codewars.com/users/et120" target='_blank' icon={SiCodewars}>
                                            Codewars
                                        </Sidebar.Item>
                                    </Sidebar.ItemGroup>
                                </Sidebar.Items>
                            </div>
                        </div>
                    </Sidebar>
                </Drawer.Items>
            </Drawer>
        </Flowbite>
    );
}
