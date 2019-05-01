interface Position {
  x: number
  y: number
}

export interface Shepherd {
  name: string
  position: Position
}

export interface Sheep {
  color: string
  position: Position
}

export const bobby: Shepherd = {
  position: {
    x: 2,
    y: 3,
  },
  name: "Bobby",
}

export const joel: Shepherd = {
  position: {
    x: 10,
    y: 10,
  },
  name: "Joel",
}

export const moveShepherd = (
  shep: Shepherd,
  destination: Position,
): Shepherd => {
  return {
    ...shep,
    position: destination,
  }
}

export const newBobby = moveShepherd(bobby, { x: 1, y: 1 })
