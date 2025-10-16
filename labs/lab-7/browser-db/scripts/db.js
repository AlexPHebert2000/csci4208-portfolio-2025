let _adapter = null;
let _doc = null;

export const useAdapter = (adapter) => {
  _adapter = adapter;
}

export const boot = async () => {
  if (!_adapter) throw new Error("No adapter set. Call useAdapter() first");
  _doc = await _adapter.load();
  return _doc;
}

export const uid = () => {
  return crypto.randomUUID().slice(0, 8);
}

// Write
export const insertOne = async (col, data) => {
  const d = getDoc();
  const rec = {id: uid(), ...data}
  d[col].push(rec);
  await _adapter.save(d);
  _doc = d;
  return rec;
}

// Read
export const getDoc = () => {
  return structuredClone(_doc);
}

export const findMany = () => {
  throw new Error("findMany() not implemented yet");
}

export const findOne = () => {
  throw new Error("findOne() not implemented yet");
}

// Update
export const updateOne = async (col, id, patch) => {
  throw new Error("updateOne() not implemented yet");
}

// Delete
export const deleteOne = (col, id) => {
  throw new Error("deleteOne() not implemented yet");
}