import React, { Fragment, useState } from 'react';
import shortid from 'shortid';

import ColorPicker from './ColorPicker';
import { Button, Form, FormTitle, Hint, Input, Label } from './Form.styles';
import { Wrapper } from './GlobalStyles';

import { COLORS, MAX_POLL_OPTIONS } from '../constants';
import { db } from '../firebase';

function CreatePoll() {
  const [errors, setErrors] = useState({
    question: null,
    options: {},
  });
  const [options, setOptions] = useState([
    { color: COLORS[0], text: '' },
    { color: COLORS[1], text: '' },
  ]);
  const [question, setQuestion] = useState('');

  function validateQuestion() {
    if (question.trim() === '') {
      setErrors({
        ...errors,
        question: 'Question cannot be empty',
      });
      return true;
    }
    return false;
  }

  function validateOptions() {
    let hasError = false;

    options.forEach((opt, i) => {
      if (opt.text.trim() === '') {
        hasError = true;

        setErrors(err => ({
          ...err,
          options: {
            ...err.options,
            [i]: `Option ${i + 1} cannot be empty`,
          },
        }));
      }
    });
    return hasError;
  }

  const handleSubmit = e => {
    e.preventDefault();

    // TODO: check if two options are the same
    // TODO: check if question and options are valid!
    const hasQuestionError = validateQuestion();
    const hasOptionsError = validateOptions();

    if (hasQuestionError || hasOptionsError) {
      return;
    }

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

    setErrors(err => ({
      ...err,
      options: {
        ...err.options,
        [index]: null,
      },
    }));

    setOptions(opts =>
      opts.map((option, idx) => {
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
    setOptions(opts =>
      opts.map((option, idx) => {
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

  function updateQuestion(e) {
    setErrors(err => ({ ...err, question: null }));
    setQuestion(e.target.value);
  }

  function canAddMoreOptions() {
    const lastOption = options[options.length - 1].text.trim();

    return options.length < MAX_POLL_OPTIONS && lastOption !== '';
  }

  return (
    <main>
      <Wrapper>
        {/* TODO: Let user know that they can do more if they sign up */}
        <Form onSubmit={handleSubmit} autoComplete="off">
          <FormTitle>Create a Poll</FormTitle>
          <Label>
            Poll question
            <Input
              type="text"
              aria-invalid={!!errors.question}
              aria-live="assertive"
              error={errors.question}
              onChange={updateQuestion}
              placeholder="Eg. What's your favourite ice cream?"
              required
              value={question}
            />
          </Label>
          {errors.question && <Hint error>{errors.question}</Hint>}
          {options.map((option, i) => {
            const isFirstTwo = i <= 1;
            return (
              <Fragment key={i}>
                <Label style={{ position: 'relative' }}>
                  {`Option ${i + 1}`}
                  <Input
                    type="text"
                    aria-invalid={errors.options[i]}
                    aria-live="assertive"
                    error={errors.options[i]}
                    name={i}
                    onChange={updateOption}
                    placeholder={`Eg. ${i === 0 ? 'Vanilla' : 'Chocolate'}`}
                    required={isFirstTwo}
                    style={{ paddingRight: '3rem' }}
                    value={option.text}
                  />
                  <ColorPicker
                    onSelect={color => updateColor(i, color)}
                    selectedColor={option.color.value}
                  />
                </Label>
                {errors.options[i] && <Hint error>{errors.options[i]}</Hint>}
              </Fragment>
            );
          })}
          {/* TODO: Only allow if previous options are filled in? */}
          {canAddMoreOptions() && (
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
