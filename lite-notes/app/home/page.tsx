"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { account } from "@/lib/appwrite";

export default function HomePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        // 1️⃣ Verify OAuth session
        const user = await account.get();

        // 2️⃣ Sync user to MongoDB
        await fetch("/api/sync_user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            appwriteId: user.$id,
            email: user.email,
            name: user.name,
          }),
        });

        // 3️⃣ Auth + sync successful
        setLoading(false);
      } catch (error) {
        // No valid session → redirect to signup
        router.replace("/auth/signup");
      }
    };

    init();
  }, [router]);

  if (loading) {
    return <div>Checking authentication...</div>;
  }

  return (
    <div className="items-center justify-center">
        <p>Welcome to Home Page (You have been Authenticated)</p>
    </div>
  );
}
