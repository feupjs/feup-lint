import type { AnyAction } from 'redux';
import type { EffectsCommandMap } from 'dva';
import { message } from 'antd';
import { fakeSubmitForm } from './service';

export type Effect = (
  action: AnyAction,
  effects: EffectsCommandMap & { select: <T>(func: (state: any) => T) => T },
) => void;

export type ModelType = {
  namespace: string;
  state: Record<string, never>;
  effects: {
    submitAdvancedForm: Effect;
  };
};

const Model: ModelType = {
  namespace: 'formAdvancedForm',

  state: {},

  effects: {
    *submitAdvancedForm({ payload }, { call }) {
      yield call(fakeSubmitForm, payload);
      message.success('ζδΊ€ζε');
    },
  },
};

export default Model;
