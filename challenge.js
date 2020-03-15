'use strict';
/* globals _, engine */
window.initGame = function () {
  console.log('initgame');
    // you're really better off leaving this line alone, i promise.
  const command =
        '5 3\n 1 1 s\n ffffff\n 2 1 w \n flfffffrrfffffff\n 0 3 w\n LLFFFLFLFL';

    // this function parses the input string so that we have useful names/parameters
    // to define the playfield and robots for subsequent steps

  const establishBounds = (input) => {
    let bounds = [];
    input = input.split('\n')[0].split(' ');
    const boundsX = parseInt(input[0]);
    const boundsY = parseInt(input[1]);
    bounds.push(boundsX, boundsY)
    return bounds;
  };

  const createRovers = (input) => {
    const rovers = [];
    input = input.split('\n');
    for (let i=1; i<input.length; i=i+2) {
      rovers.push(getLocationValues(input[i]));
    }
    return rovers;
  };

  const getLocationValues = (startPos) => {
    const locationValues = {};
    locationValues.x = parseInt(startPos.split(' ')[1]);
    locationValues.y = parseInt(startPos.split(' ')[2]);
    locationValues.o = startPos.split(' ')[3];
    return locationValues;
  };

  const listDirections = (input) => {
    const directions = [];
    input = input.split('\n');
    for (let i=1; i<input.length; i=i+2) {
      directions.push(input[i+1]);
    }
    return directions;
  };

  const parseInput = (input) => {

    //
    // task #1 
    //
    // replace the 'parsed' variable below to be the string 'command' parsed into an object we can pass to genworld();
    // genworld expects an input object in the form { 'bounds': [3, 8], 'robos': [{x: 2, y: 1, o: 'W', command: 'rlrlff'}]}
    // where bounds represents the southeast corner of the plane and each robos object represents the
    // x,y coordinates of a robot and o is a string representing their orientation. a sample object is provided below
    //
    const robos = createRovers(input);

    robos.forEach((e, i) => {
      e.command = listDirections(input)[i];
    })

    let parsed = {
      bounds: establishBounds(input),
      robos: robos
    };

    return parsed;
  };

    // this function replaces the robos after they complete one instruction
    // from their commandset
  const tickRobos = (robos) => {
    console.log('tickrobos');

    console.log(robos);
        // 
        // task #2
        //
        // in this function, write business logic to move robots around the playfield
        // the 'robos' input is an array of objects; each object has 4 parameters.
        // This function needs to edit each robot in the array so that its x/y coordinates
        // and orientation parameters match the robot state after 1 command has been completed. 
        // Also, you need to remove the command the robot just completed from the command list.
        // example input:
        //
        // robos[0] = {x: 2, y: 2, o: 'N', command: 'frlrlrl'}
        //
        //                   - becomes -
        // 
        // robos[0] = {x: 2, y: 1, o: 'N', command: 'rlrlrl'} 
        //
        // if a robot leaves the bounds of the playfield, it should be removed from the robos
        // array. It should leave a 'scent' in it's place. If another robot–for the duration
        // of its commandset–encounters this 'scent', it should refuse any commands that would
        // cause it to leave the playfield.

        // write robot logic here

        // return the mutated robos object from the input to match the new state
        // return ???;
  };
    // mission summary function
  const missionSummary = (robos) => {
    console.log('mission summary', robos);
        //
        // task #3
        //
        // summarize the mission and inject the results into the DOM elements referenced in readme.md
        //
    return;
  };

    // leave this alone please
  return {
    parse: parseInput,
    tick: tickRobos,
    summary: missionSummary,
    command: command
  };
};

