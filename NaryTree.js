import React from 'react';

class Node {
  constructor(question, choice, firstChild = null, nextSibling = null) {
    this.question = question;  // Kysymysteksti (Valitse yksi kolmesta vaihtoehdosta)
    this.answer = choice;  // Vastaus array (vaihtoehto1, vaihtoehto2, vaihtoehto3)
    this.firstChild = firstChild; // Viittaa ensimmäiseen lapsi nodeen
    this.nextSibling = nextSibling; //Viittaa seuraavaan sisarus nodeen
  }

  setFirstChild(childNode) {
    this.firstChild = childNode;
  }

  setNextSibling(siblingNode) {
    this.nextSibling = siblingNode;
  }
}

const NaryTree = () => {
  const root = new Node("Valitse yksi kolmesta vaihtoehdosta", ["vaihtoehto1", "vaihtoehto2", "vaihtoehto3"]);
  const firstChildNode = new Node("Valitse yksi seitsemästä vaihtoehdosta", "vaihtoehto1");
  root.setFirstChild(firstChildNode);

  const nextSiblingNode = new Node("vaihtoehto2");
  firstChildNode.setNextSibling(nextSiblingNode);

  return (
    <div>
      <h2>{root.question}</h2>
      <p>{root.choice}</p>
    </div>
  );
};

export default NaryTree;
