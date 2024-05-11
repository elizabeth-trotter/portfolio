'use client';

// External imports
import { Drawer, Sidebar } from "flowbite-react";

// Internal imports
import { HiClipboard, HiCollection, HiUser, HiOutlineExternalLink, HiUserCircle, FaLinkedinIn, BsGithub, MdOutlineAlternateEmail, SiCodewars } from "@/app/icons";
import { customDrawerTheme } from "../../styles/themes/CustomDrawerTheme";

export function NavbarDrawerComponent(props: { isDarkMode: boolean, isOpen: boolean, handleClose: () => void }) {

    return (
        <Drawer theme={customDrawerTheme} open={props.isOpen} onClose={props.handleClose} className="bg-[#faf0e6] font-josefin-sans">
            <Drawer.Header title="Elizabeth's Portfolio" titleIcon={() => <></>} />
            <Drawer.Items>
                <Sidebar
                    aria-label="Sidebar with multi-level dropdown example"
                    className="[&>div]:bg-transparent [&>div]:p-0"
                >
                    <div className="flex h-full flex-col justify-between py-2">
                        <div>
                            <Sidebar.Items>
                                <Sidebar.ItemGroup>
                                    <Sidebar.Item href="#about" icon={HiUser} onClick={props.handleClose}>
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
                                    <Drawer.Header title="Connect" titleIcon={() => <></>} className="pt-10" />
                                    <Sidebar.Item href="mailto:elizabeth.dev.inquiry@gmail.com" icon={HiOutlineExternalLink}>
                                        Email
                                    </Sidebar.Item>
                                    <Sidebar.Item href="https://github.com/et120" target='_blank' icon={HiOutlineExternalLink}>
                                        GitHub
                                    </Sidebar.Item>
                                    <Sidebar.Item href="https://www.linkedin.com/in/elizabeth-trotter" target='_blank' icon={HiOutlineExternalLink}>
                                        LinkedIn
                                    </Sidebar.Item>
                                    <Sidebar.Item href="https://www.codewars.com/users/et120" target='_blank' icon={HiOutlineExternalLink}>
                                        Codewars
                                    </Sidebar.Item>
                                </Sidebar.ItemGroup>
                            </Sidebar.Items>
                        </div>
                    </div>
                </Sidebar>
            </Drawer.Items>
        </Drawer>
    );
}