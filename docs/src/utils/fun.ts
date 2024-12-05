export const StrFun = {
  capitalize(str: string, reg: string, joinReg: string) {
    return str
      .split(reg)
      .map((w) => w.slice(0, 1).toUpperCase() + w.slice(1))
      .join(joinReg);
  },
};
