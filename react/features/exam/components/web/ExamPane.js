/* eslint-disable react-native/no-color-literals */
// @flow

import React from 'react';

import PollCreate from '../../../polls/components/web/PollCreate';
import AbstractExamPane from '../AbstractExamPane';
import type { AbstractProps } from '../AbstractExamPane';


const ExamPane = (props: AbstractProps) => {

    const { createMode, onCreate, setCreateMode, t } = props;

    return createMode
        ? <PollCreate setCreateMode = { setCreateMode } />
        : <div className = 'polls-pane-content'>
            <div className = { 'poll-container' } />
            <div className = { 'poll-footer' }>
                <button
                    aria-label = { t('polls.create.create') }
                    className = { 'poll-primary-button' }
                    // eslint-disable-next-line react/jsx-no-bind
                    onClick = { onCreate } >
                    <span>{t('polls.create.create')}</span>
                </button>
            </div>
        </div>;
};


/*
 * We apply AbstractExamPane to fill in the AbstractProps common
 * to both the web and native implementations.
 */
// eslint-disable-next-line new-cap
export default AbstractExamPane(ExamPane);
