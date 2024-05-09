# Thinking in React: Korean Restaurant

## Key Takeaway

- Throughout this project, I applied five principles of Thinking in React. Here's how I did it:

1. **Break User Interface into Components:** I started the project by wireframing two interactive screens, the main menu screen, and the modal screen.

   |                      Main menu screen                       | Triggered modal screen                                             |
   | :---------------------------------------------------------: | :----------------------------------------------------------------- |
   | ![Main menu screen](assets/Korean_Restaurant_Food_Page.png) | ![Triggered modal screen](assets/Korean_Restaurant_Food_Modal.png) |

2. **Build Static Layout:** Then I determined the static layout and interactivity of each component and labeled them. Afterward, I determined the state based on retrograde analysis. I added my analysis onto the initial wireframe and used color codes for easy reference during later coding work.

   |                    Main menu screen                     | Triggered modal screen                                    |
   | :-----------------------------------------------------: | :-------------------------------------------------------- |
   | ![Main menu screen](assets/Food_Page_Component_Map.png) | ![Triggered modal screen](assets/Modal_Component_Map.png) |

3. **Find the Minimal State Representation:** In this activity, I asked the following questions to determine whether a component should have state or not and how it should react:

   - Does it remain unchanged over time?
   - Is it passed in from a parent via props?
   - Can you compute it based on existing state or props in your component?

4. **Identify Where State Should Live:** In my case, each food card has its stats and it passes the data to the modal when users want to review the detailed information about the menu. I used props and the spread technique to extract the right data to parse.

5. **Maintains a Clear and Explicit Data Flow:** I ensured that data changes are controlled and predictable, preventing unexpected behavior caused by automatic updates or two-way data binding, making it easier to manage and debug in this restaurant application.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
