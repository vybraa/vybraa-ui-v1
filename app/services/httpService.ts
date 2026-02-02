export class HttpService {
  constructor() {}


  private readonly apiUrl = process.env.NEXT_PUBLIC_API_URL;
  private readonly headers = {
    'Content-Type': 'application/json',
  };

  async makeRequest<T>(url: string, options: RequestInit = {}): Promise<T> {
    const fullUrl = `${this.apiUrl ?? ""}${url}`;
    const response = await fetch(fullUrl, {
      ...options,
      headers: {
        ...this.headers,
        ...(options.headers as Record<string, string>),
      },
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const message =
        (data as { message?: string })?.message ??
        (data as { error?: string })?.error ??
        `Request failed (${response.status})`;
      throw new Error(message);
    }

    return data as T;
  }
}
