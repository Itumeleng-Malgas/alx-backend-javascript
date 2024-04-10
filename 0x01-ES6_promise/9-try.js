export default function guardrail(mathFunction) {
  const queue = ['Guardrail was processed'];
  try {
    const value = mathFunction();
    queue.unshift(value);
  } catch (err) {
    queue.unshift(err.toString());
  }

  return queue;
}
