-- ==========================================
-- SUPABASE POSTGRESQL SCHEMA FOR KARA'S DONER
-- Copy and paste this script into the Supabase SQL Editor
-- ==========================================

-- 1. Create the orders table
CREATE TABLE IF NOT EXISTS orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_num VARCHAR(20) NOT NULL UNIQUE,
    telegram_id VARCHAR(50),
    client_name VARCHAR(100) NOT NULL,
    client_phone VARCHAR(50) NOT NULL,
    client_address TEXT NOT NULL,
    client_kaspi VARCHAR(50) NOT NULL,
    shipping NUMERIC DEFAULT 500,
    total NUMERIC NOT NULL,
    status VARCHAR(30) DEFAULT 'pending_confirm', -- pending_confirm, pending_payment, preparing, delivering, completed, cancelled
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create the order_items table
CREATE TABLE IF NOT EXISTS order_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    item_id VARCHAR(50) NOT NULL,
    name VARCHAR(100) NOT NULL,
    selected_option VARCHAR(50) NOT NULL,
    price NUMERIC NOT NULL,
    quantity INTEGER NOT NULL,
    emoji VARCHAR(10)
);

-- 3. Enable Realtime database listening for the orders table
-- This is critical for both the client Web App and the Cashier Panel
-- to communicate and receive status updates instantly.
alter publication supabase_realtime add table orders;
alter publication supabase_realtime add table order_items;

-- 4. Grant privileges to the anon and authenticated roles
-- This is required so the client-side JS (under the anon role) can access the tables.
GRANT ALL ON public.orders TO anon;
GRANT ALL ON public.order_items TO anon;
GRANT ALL ON public.orders TO authenticated;
GRANT ALL ON public.order_items TO authenticated;

-- 5. Enable Row Level Security (RLS) policies (Optional, for production)
-- For local testing, you can read/write without RLS or by setting RLS policies.
-- If you enable RLS, run these policies to allow anonymous users to read and write:
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anon insert to orders" ON orders FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow anon select to orders" ON orders FOR SELECT TO anon USING (true);
CREATE POLICY "Allow anon update to orders" ON orders FOR UPDATE TO anon USING (true);

CREATE POLICY "Allow anon insert to order_items" ON order_items FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow anon select to order_items" ON order_items FOR SELECT TO anon USING (true);
CREATE POLICY "Allow anon update to order_items" ON order_items FOR UPDATE TO anon USING (true);
CREATE POLICY "Allow anon delete to order_items" ON order_items FOR DELETE TO anon USING (true);
