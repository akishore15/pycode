document.addEventListener("DOMContentLoaded", () => {
    const commandInput = document.getElementById("commandInput");
    const output = document.getElementById("output");

    commandInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            const command = commandInput.value;
            if (command.trim() !== "") {
                executeCommand(command);
                commandInput.value = "";
            }
        }
    });

    function executeCommand(command) {
        const commandOutput = document.createElement("div");
        commandOutput.textContent = `> ${command}`;
        output.appendChild(commandOutput);

        // Simulate command processing (for example purposes)
        const resultOutput = document.createElement("div");
        resultOutput.textContent = `Result of "${command}" command`;
        output.appendChild(resultOutput);

        // Scroll to the bottom of the output
        output.scrollTop = output.scrollHeight;
    }
});
