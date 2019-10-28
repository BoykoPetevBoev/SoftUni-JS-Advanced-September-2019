class Computer {
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = Number(ramMemory);
        this.cpuGHz = Number(cpuGHz);
        this.hddMemory = Number(hddMemory);
        this.taskManager = [];
        this.installedPrograms = [];
    }
    installAProgram(name, requiredSpace) {
        if (requiredSpace > this.hddMemory) {
            throw new Error("There is not enough space on the hard drive");
        }
        let obj = {
            name: name,
            requiredSpace: Number(requiredSpace)
        };
        this.installAProgram.push(obj);
        this.hddMemory -= Number(requiredSpace);
        return obj;
    }
    uninstallAProgram(name) {
        let programIndex = this.installedPrograms.indexOf(name)
        if (programIndex === -1) {
            throw new Error("Control panel is not responding");
        }
        this.hddMemory += this.installedPrograms[programIndex].requiredSpace;
        this.installedPrograms.splice(programIndex, 1);
        return this.installedPrograms;
    }
    openAProgram(name) {
         
    }
}