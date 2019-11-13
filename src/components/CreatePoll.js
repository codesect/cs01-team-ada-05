import React, { useState } from 'react';
import shortid from 'shortid';

import ColorPicker from './ColorPicker';
import { Button, Form, FormTitle, Input, Label } from './Form.styles';
import { Wrapper } from './GlobalStyles';

import { COLORS, MAX_POLL_OPTIONS } from '../constants';
import { db } from '../firebase';

function CreatePoll() {
  const [options, setOptions] = useState([
    { color: COLORS[0], text: '' },
    { color: COLORS[1], text: '' },
  ]);
  const [question, setQuestion] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // TODO: check if question and options are valid!
    const id = shortid.generate();

    db.collection('polls')
      .add({
        id,
        createdAt: new Date(),
        options,
        question,
        user: null,
        // user: db.collection('users').doc(user.uid),
      })
      .then(res => {
        console.log({ id, firebaseId: res.id });
      });
  };

  function addNewOption() {
    setOptions([...options, { color: COLORS[options.length], text: '' }]);
  }

  function updateOption(e) {
    const { name: index, value: text } = e.target;

    setOptions(
      options.map((option, idx) => {
        if (index !== idx.toString()) {
          return option;
        }

        return {
          ...option,
          text,
        };
      })
    );
  }

  function updateColor(index, color) {
    setOptions(
      options.map((option, idx) => {
        if (index !== idx) {
          return option;
        }

        return {
          ...option,
          color,
        };
      })
    );
  }

  return (
    <main>
      <Wrapper>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <FormTitle>Create a Poll</FormTitle>
          <Label>
            Poll question
            <Input
              type="text"
              onChange={e => setQuestion(e.target.value)}
              placeholder="Eg. What's your favourite ice cream?"
              value={question}
            />
          </Label>
          {options.map((option, i) => {
            return (
              <Label key={i} style={{ position: 'relative' }}>
                {`Option ${i + 1}`}
                <Input
                  type="text"
                  name={i}
                  onChange={updateOption}
                  placeholder={`Eg. ${i === 0 ? 'Vanilla' : 'Chocolate'}`}
                  style={{ paddingRight: '3rem' }}
                  value={option.text}
                />
                <ColorPicker
                  onSelect={color => updateColor(i, color)}
                  selectedColor={option.color.value}
                />
              </Label>
            );
          })}
          {/* TODO: Only allow if previous options are filled in? */}
          {options.length < MAX_POLL_OPTIONS && (
            <Button type="button" onClick={addNewOption}>
              Add a new option
            </Button>
          )}
          <Button fullwidth>Create Your Poll</Button>
        </Form>
      </Wrapper>
    </main>
  );
}

export default CreatePoll;
