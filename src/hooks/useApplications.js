export const postApplication = async (application) => {
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

    const response = await fetch(process.env.REACT_APP_DISCORD_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return response;
}