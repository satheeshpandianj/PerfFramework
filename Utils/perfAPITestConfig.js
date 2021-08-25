
export function GetEnv(args) {
    var Env;
    for (var i = 0; i < args.length; i++) {
        if (args[i].includes('Env')) {
            Env = args[i].split('=').pop();
        }
    }
    return Env;
}

export function GetProject(args) {
    var Project;
    for (var i = 0; i < args.length; i++) {
        if (args[i].includes('Project')) {
            Project = args[i].split('=').pop();
        }
    }
    return Project;
}