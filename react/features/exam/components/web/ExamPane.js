/* eslint-disable react-native/no-color-literals */
// @flow

import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

import { BUTTON_MODES } from '../../../chat/constants';
import AbstractExamPane from '../AbstractExamPane';
import type { AbstractProps } from '../AbstractExamPane';

import PollCreate from './PollCreate';
import PollsList from './PollsList';
import { chatStyles } from './styles';

const ExamPane = (props: AbstractProps) => {

    const { createMode, onCreate, setCreateMode, t } = props;

    return (
        <View style={chatStyles.PollPane}>
            <h1>TEST</h1>
        </View>
    );
};


/*
 * We apply AbstractExamPane to fill in the AbstractProps common
 * to both the web and native implementations.
 */
// eslint-disable-next-line new-cap
export default AbstractExamPane(ExamPane);
