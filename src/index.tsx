import React,{FC, PropsWithChildren} from 'react';
import './index.scss';
import {rerenderEntireTree} from "./render";
import state from "./components/Redux/state";

rerenderEntireTree(state);











