//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {

  let orbital
  const earthSeconds = 31557600
  

  switch (planet.toLowerCase()) {

    case "mercury":
      orbital = 0.2408467
      break

      case "venus":
        orbital = 0.61519726
        break

        case "earth":
          orbital = 1.0
          break

          case "mars":
            orbital = 1.8808158
            break

            case "jupiter":
            orbital = 11.862615
            break

            case "saturn":
              orbital = 29.447498
              break

              case "uranus":
                orbital = 84.016846
                break

                case "neptune":
                  orbital = 164.79132
                  break

    default:
      orbital= 1.0
  }

  let earthYears = (seconds / 31557600) / orbital

  return parseFloat(earthYears.toFixed(2))

};