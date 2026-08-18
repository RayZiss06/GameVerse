import axios from "axios";

// API error payload returned by the backend.
export interface ApiErrorResponse {
  message?: string;
  code?: string;
  details?: unknown;
}

// Application-level error representation for API failures.
export class ApiError extends Error {
  readonly status: number | undefined;
  readonly code: string | undefined;
  readonly details: unknown;
  readonly cause: unknown;

  constructor(
    message: string,
    options?: {
      status?: number;
      code?: string;
      details?: unknown;
      cause?: unknown;
    },
  ) {
    super(message);

    this.name = "ApiError";
    this.status = options?.status;
    this.code = options?.code;
    this.details = options?.details;
    this.cause = options?.cause;
  }
}

// Converts different HTTP/client failures into a consistent ApiError.
export function normalizeApiError(error: unknown): ApiError {
  if (!axios.isAxiosError<ApiErrorResponse>(error)) {
    if (error instanceof Error) {
      return new ApiError(error.message, {
        cause: error,
      });
    }

    return new ApiError("An unexpected error occurred.", {
      cause: error,
    });
  }

  if (!error.response) {
    if (error.code === "ECONNABORTED" || error.code === "ETIMEDOUT") {
      return new ApiError("The request timed out.", {
        cause: error,
      });
    }

    return new ApiError("Unable to connect to the GameVerse server.", {
      cause: error,
    });
  }

  const responseData = error.response.data;

  return new ApiError(
    responseData?.message ?? "The server returned an error.",
    {
      status: error.response.status,
      code: responseData?.code,
      details: responseData?.details,
      cause: error,
    },
  );
}
