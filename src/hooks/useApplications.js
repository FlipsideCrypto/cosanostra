export const postApplication = async (application) => {
    const url = "https://discord.com/api/webhooks/1040463575132668055/87P4hfq1ueEnJ5aVpiCMLVPdTLakpiqvNLRPNQrmIVGUTIxD0g6dFAxHx6SAXy9lQVF-";

    // create a single embed with all the data
    const fields = Object.entries(application).map(([key, value]) => {
        const name = key.replace(/_/g, ' ');
        return { name, value };
    });

    // set the url to the application project
    const embed = {
        title: "🚨 new cosanostra application 🚨",
        description: "A new application has been submitted.",
        color: 0x00ff00,
        fields: fields,
        url: application.project,
    };

    const data = {
        embeds: [embed],
    };

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return response;
}