let value = 0;

export const getValue = async (req, res) => {
  res.send({ value });
};

export const increment = async (req, res) => {
  value++;
  res.send({ value });
};

export const decrement = async (req, res) => {
  value--;
  res.send({ value });
};
