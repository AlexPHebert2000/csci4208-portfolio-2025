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

// Write
export const insertOne = (col, data) => {
  throw new Error("insertOne() not implemented yet");
}

// Read
export const getDoc = () => {
  throw new Error("getDoc() not implemented yet");
}

export const findMany = () => {
  throw new Error("findMany() not implemented yet");
}

export const findOne = () => {
  throw new Error("findOne() not implemented yet");
}

// Update
export const updateOne = (col, id, patch) => {
  throw new Error("updateOne() not implemented yet");
}

// Delete
export const deleteOne = (col, id) => {
  throw new Error("deleteOne() not implemented yet");
}