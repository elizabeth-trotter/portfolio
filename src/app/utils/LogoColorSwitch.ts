export function getTextLogoColor(logo: string) {
    switch (logo) {
        case "JavaScript":
            return "text-javascriptYellow";
        case "TypeScript":
            return "text-typescriptBlue";
        case "C#":
            return "text-csharpPurple";
        case "HTML":
            return "text-htmlRed";
        case "CSS":
            return "text-cssBlue";
        case "SQL":
            return "text-sqlBlack";
        case ".NET":
            return "text-dotnetBlue";
        case "React":
            return "text-reactBlue";
        case "Next.js":
            return "text-nextjsPurple";
        case "Angular":
            return "text-angularRed";
        case "Bootstrap":
            return "text-bootstrapIndigo";
        case "Tailwind CSS":
            return "text-tailwindBlack";
        case "Azure":
            return "text-azureBlue";
        case "VS Code":
            return "text-vscodeBlue";
        case "Figma":
            return "text-figmaPink";
        case "Postman":
            return "text-postmanOrange";
        case "Jira":
            return "text-jiraGreen";
        case "Git":
            return "text-gitBlack";
        default:
            return "text-black";
    }
}