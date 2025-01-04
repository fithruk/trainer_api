class BodyShapeValueError extends Error {
  public status: number;
  public errors: string[];

  constructor(status: number, message: string, errors: string[] = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static noDataAvailableError = () => {
    return new BodyShapeValueError(202, "No data found");
  };
}

export default BodyShapeValueError;
