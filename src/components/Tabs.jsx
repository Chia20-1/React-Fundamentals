export default function Tabs({ children, button, ButtonsContainer = "menu" }) {
  //   const buttonsContainer = ButtonsContainer;

  return (
    <>
      <ButtonsContainer>{button}</ButtonsContainer>
      {children}
    </>
  );
}

{
  /* Ternerary Expression Appraoch */
}
{
  /* {!selectedTopic ? (
            <p>Please select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */
}

{
  /* && Conditional */
}
{
  /* {!selectedTopic && <p>Please select a topic</p>} */
}
{
  /* {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */
}
