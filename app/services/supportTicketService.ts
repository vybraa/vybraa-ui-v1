import { HttpService } from "./httpService";

export enum SupportTicketPriority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

export enum SupportTicketCategory {
  GENERAL_SUPPORT = "GENERAL_SUPPORT",
  TECHNICAL_SUPPORT = "TECHNICAL_SUPPORT",
  ACCOUNT_SUPPORT = "ACCOUNT_SUPPORT",
  PAYMENT_SUPPORT = "PAYMENT_SUPPORT",
  REQUEST_SUPPORT = "REQUEST_SUPPORT",
  WITHDRAWAL_SUPPORT = "WITHDRAWAL_SUPPORT",
  DISPUTE_SUPPORT = "DISPUTE_SUPPORT",
  VERIFICATION_SUPPORT = "VERIFICATION_SUPPORT",
  OTHER_SUPPORT = "OTHER_SUPPORT",
  OTHER = "OTHER",
}

export type CreateSupportTicketPayload = {
  email: string;
  subject: string;
  description: string;
  priority: SupportTicketPriority;
  category: SupportTicketCategory;
};

export class SupportTicketService {
  constructor(private readonly httpService: HttpService) {}

  async createSupportTicket(
    payload: CreateSupportTicketPayload
  ): Promise<{ id: string }> {
    const response = await this.httpService.makeRequest<{ id: string }>(
      "/support-ticket",
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );
    return response;
  }
}

export const supportTicketService = new SupportTicketService(new HttpService());