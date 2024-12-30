import { ReturnError } from "./error";

export const throwTriggerError = (
  withTrigger?: boolean,
  triggerType?: string,
  triggerValue?: string,
  trigger?: string
) => {
  if (withTrigger) {
    ReturnError.throw(
      !trigger || !triggerType || !triggerValue,
      "Please input all required trigger properties: trigger, triggerType, and triggerValue."
    );
  }
};
