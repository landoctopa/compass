export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "17.1"
  }
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      actions: {
        Row: {
          company_id: string | null
          created_at: string | null
          description: string | null
          due_date: string | null
          id: string
          linked_anomaly_id: string | null
          linked_goal_id: string | null
          metadata: Json | null
          priority: number | null
          status: Database["public"]["Enums"]["action_status"] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string | null
          description?: string | null
          due_date?: string | null
          id?: string
          linked_anomaly_id?: string | null
          linked_goal_id?: string | null
          metadata?: Json | null
          priority?: number | null
          status?: Database["public"]["Enums"]["action_status"] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          company_id?: string | null
          created_at?: string | null
          description?: string | null
          due_date?: string | null
          id?: string
          linked_anomaly_id?: string | null
          linked_goal_id?: string | null
          metadata?: Json | null
          priority?: number | null
          status?: Database["public"]["Enums"]["action_status"] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "actions_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "actions_linked_goal_id_fkey"
            columns: ["linked_goal_id"]
            isOneToOne: false
            referencedRelation: "business_goals"
            referencedColumns: ["id"]
          },
        ]
      }
      brand_mentions: {
        Row: {
          company_id: string | null
          content: string
          created_at: string | null
          embedding: string | null
          engagement_score: number | null
          id: string
          needs_reply: boolean | null
          platform: string
          sentiment: Database["public"]["Enums"]["sentiment_type"] | null
        }
        Insert: {
          company_id?: string | null
          content: string
          created_at?: string | null
          embedding?: string | null
          engagement_score?: number | null
          id?: string
          needs_reply?: boolean | null
          platform: string
          sentiment?: Database["public"]["Enums"]["sentiment_type"] | null
        }
        Update: {
          company_id?: string | null
          content?: string
          created_at?: string | null
          embedding?: string | null
          engagement_score?: number | null
          id?: string
          needs_reply?: boolean | null
          platform?: string
          sentiment?: Database["public"]["Enums"]["sentiment_type"] | null
        }
        Relationships: [
          {
            foreignKeyName: "brand_mentions_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      business_goals: {
        Row: {
          category: string
          company_id: string | null
          created_at: string | null
          embedding: string | null
          horizon: Database["public"]["Enums"]["goal_horizon"]
          id: string
          narrative: string
          target_metric: string | null
          target_value: number | null
          valid_until: string | null
        }
        Insert: {
          category: string
          company_id?: string | null
          created_at?: string | null
          embedding?: string | null
          horizon: Database["public"]["Enums"]["goal_horizon"]
          id?: string
          narrative: string
          target_metric?: string | null
          target_value?: number | null
          valid_until?: string | null
        }
        Update: {
          category?: string
          company_id?: string | null
          created_at?: string | null
          embedding?: string | null
          horizon?: Database["public"]["Enums"]["goal_horizon"]
          id?: string
          narrative?: string
          target_metric?: string | null
          target_value?: number | null
          valid_until?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "business_goals_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      companies: {
        Row: {
          business_type: string | null
          created_at: string | null
          currency: string | null
          id: string
          industry: string | null
          name: string
          timezone: string | null
          updated_at: string | null
        }
        Insert: {
          business_type?: string | null
          created_at?: string | null
          currency?: string | null
          id?: string
          industry?: string | null
          name: string
          timezone?: string | null
          updated_at?: string | null
        }
        Update: {
          business_type?: string | null
          created_at?: string | null
          currency?: string | null
          id?: string
          industry?: string | null
          name?: string
          timezone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      company_integrations: {
        Row: {
          access_token: string | null
          company_id: string | null
          created_at: string | null
          id: string
          last_synced_at: string | null
          metadata: Json | null
          provider: Database["public"]["Enums"]["integration_provider"]
          refresh_token: string | null
          status: Database["public"]["Enums"]["integration_status"] | null
          token_expires_at: string | null
          updated_at: string | null
        }
        Insert: {
          access_token?: string | null
          company_id?: string | null
          created_at?: string | null
          id?: string
          last_synced_at?: string | null
          metadata?: Json | null
          provider: Database["public"]["Enums"]["integration_provider"]
          refresh_token?: string | null
          status?: Database["public"]["Enums"]["integration_status"] | null
          token_expires_at?: string | null
          updated_at?: string | null
        }
        Update: {
          access_token?: string | null
          company_id?: string | null
          created_at?: string | null
          id?: string
          last_synced_at?: string | null
          metadata?: Json | null
          provider?: Database["public"]["Enums"]["integration_provider"]
          refresh_token?: string | null
          status?: Database["public"]["Enums"]["integration_status"] | null
          token_expires_at?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "company_integrations_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      company_users: {
        Row: {
          company_id: string
          role: string | null
          user_id: string
        }
        Insert: {
          company_id: string
          role?: string | null
          user_id: string
        }
        Update: {
          company_id?: string
          role?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "company_users_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_relations: {
        Row: {
          channel: string
          company_id: string | null
          created_at: string | null
          customer_id: string | null
          description: string | null
          id: string
          interaction_type: string
          order_id: string | null
          rating: number | null
          reason_code: string | null
        }
        Insert: {
          channel: string
          company_id?: string | null
          created_at?: string | null
          customer_id?: string | null
          description?: string | null
          id?: string
          interaction_type: string
          order_id?: string | null
          rating?: number | null
          reason_code?: string | null
        }
        Update: {
          channel?: string
          company_id?: string | null
          created_at?: string | null
          customer_id?: string | null
          description?: string | null
          id?: string
          interaction_type?: string
          order_id?: string | null
          rating?: number | null
          reason_code?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_relations_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customer_relations_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customer_relations_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "sales_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      customers: {
        Row: {
          channel_acquired: string
          city: string | null
          company_id: string | null
          email: string | null
          external_id: string | null
          first_seen_at: string | null
          id: string
          loyalty_enrolled: boolean | null
          name: string | null
          phone: string | null
          state: string | null
        }
        Insert: {
          channel_acquired: string
          city?: string | null
          company_id?: string | null
          email?: string | null
          external_id?: string | null
          first_seen_at?: string | null
          id?: string
          loyalty_enrolled?: boolean | null
          name?: string | null
          phone?: string | null
          state?: string | null
        }
        Update: {
          channel_acquired?: string
          city?: string | null
          company_id?: string | null
          email?: string | null
          external_id?: string | null
          first_seen_at?: string | null
          id?: string
          loyalty_enrolled?: boolean | null
          name?: string | null
          phone?: string | null
          state?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customers_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      fulfillment: {
        Row: {
          courier: string | null
          delivered_date: string | null
          dispatch_date: string | null
          id: string
          ndr_reason: string | null
          order_id: string | null
          status: string
          tracking_awb: string | null
        }
        Insert: {
          courier?: string | null
          delivered_date?: string | null
          dispatch_date?: string | null
          id?: string
          ndr_reason?: string | null
          order_id?: string | null
          status: string
          tracking_awb?: string | null
        }
        Update: {
          courier?: string | null
          delivered_date?: string | null
          dispatch_date?: string | null
          id?: string
          ndr_reason?: string | null
          order_id?: string | null
          status?: string
          tracking_awb?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fulfillment_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "sales_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      market_signals: {
        Row: {
          company_id: string | null
          embedding: string | null
          id: string
          raw_content: string
          scraped_at: string | null
          source_type: Database["public"]["Enums"]["signal_type"]
          source_url: string | null
          title: string
        }
        Insert: {
          company_id?: string | null
          embedding?: string | null
          id?: string
          raw_content: string
          scraped_at?: string | null
          source_type: Database["public"]["Enums"]["signal_type"]
          source_url?: string | null
          title: string
        }
        Update: {
          company_id?: string | null
          embedding?: string | null
          id?: string
          raw_content?: string
          scraped_at?: string | null
          source_type?: Database["public"]["Enums"]["signal_type"]
          source_url?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "market_signals_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      marketing_performance: {
        Row: {
          campaign_name: string
          clicks: number | null
          company_id: string | null
          conversions: number | null
          date: string
          id: string
          platform: string
          revenue_attributed: number | null
          sessions: number | null
          spend: number | null
        }
        Insert: {
          campaign_name: string
          clicks?: number | null
          company_id?: string | null
          conversions?: number | null
          date: string
          id?: string
          platform: string
          revenue_attributed?: number | null
          sessions?: number | null
          spend?: number | null
        }
        Update: {
          campaign_name?: string
          clicks?: number | null
          company_id?: string | null
          conversions?: number | null
          date?: string
          id?: string
          platform?: string
          revenue_attributed?: number | null
          sessions?: number | null
          spend?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "marketing_performance_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          phone: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          full_name?: string | null
          id: string
          phone?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          phone?: string | null
        }
        Relationships: []
      }
      sales_order_items: {
        Row: {
          id: string
          line_total: number
          order_id: string | null
          qty: number
          sku_id: string
          unit_price: number
        }
        Insert: {
          id?: string
          line_total: number
          order_id?: string | null
          qty: number
          sku_id: string
          unit_price: number
        }
        Update: {
          id?: string
          line_total?: number
          order_id?: string | null
          qty?: number
          sku_id?: string
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "sales_order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "sales_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      sales_orders: {
        Row: {
          channel: string
          company_id: string | null
          customer_id: string | null
          discount: number | null
          external_order_id: string
          id: string
          order_ts: string
          shipping: number | null
          status: string
          subtotal: number | null
          total: number
        }
        Insert: {
          channel: string
          company_id?: string | null
          customer_id?: string | null
          discount?: number | null
          external_order_id: string
          id?: string
          order_ts: string
          shipping?: number | null
          status: string
          subtotal?: number | null
          total: number
        }
        Update: {
          channel?: string
          company_id?: string | null
          customer_id?: string | null
          discount?: number | null
          external_order_id?: string
          id?: string
          order_ts?: string
          shipping?: number | null
          status?: string
          subtotal?: number | null
          total?: number
        }
        Relationships: [
          {
            foreignKeyName: "sales_orders_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_orders_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      action_status: "drafted_by_ai" | "approved" | "completed" | "rejected"
      goal_horizon: "daily" | "monthly" | "quarterly" | "yearly"
      integration_provider:
        | "shopify"
        | "amazon"
        | "flipkart"
        | "meta_ads"
        | "shiprocket"
      integration_status: "active" | "disconnected" | "error" | "pending"
      sentiment_type: "positive" | "neutral" | "negative"
      signal_type:
        | "competitor_pricing"
        | "industry_news"
        | "supplier_update"
        | "general"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      action_status: ["drafted_by_ai", "approved", "completed", "rejected"],
      goal_horizon: ["daily", "monthly", "quarterly", "yearly"],
      integration_provider: [
        "shopify",
        "amazon",
        "flipkart",
        "meta_ads",
        "shiprocket",
      ],
      integration_status: ["active", "disconnected", "error", "pending"],
      sentiment_type: ["positive", "neutral", "negative"],
      signal_type: [
        "competitor_pricing",
        "industry_news",
        "supplier_update",
        "general",
      ],
    },
  },
} as const
