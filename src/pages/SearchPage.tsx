import { useMemo, useState } from "react";
import type { Platform } from "@/types";
import { Layout } from "@/components/Layout";
import { PlatformFilter } from "@/components/PlatformFilter";
import { ProfileList } from "@/components/ProfileList";
import { extractProfiles, filterProfiles } from "@/utils/dataHelpers";
import { SelectedProfiles } from "@/components/SelectedProfiles";

export function SearchPage() {
  const [platform, setPlatform] = useState<Platform>("instagram");
  const [searchQuery, setSearchQuery] = useState("");
   

  const allProfiles = useMemo(
    () => extractProfiles(platform),
    [platform]
  );

  const filtered = useMemo(
    () => filterProfiles(allProfiles, searchQuery),
    [allProfiles, searchQuery]
  );

   const handleProfileClick = () => {};

  return (
    <Layout title="Find Influencers">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Discover Influencers
      </h2>

      <p className="text-gray-500 mb-6">
        Search and shortlist creators across Instagram, YouTube and TikTok.
      </p>

      <PlatformFilter
        selected={platform}
        onChange={(p) => {
          setPlatform(p);
          setSearchQuery("");
        }}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <p className="text-sm text-gray-500 mt-4">
        Showing {filtered.length} of {allProfiles.length} creators on {platform}
      </p>
    </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <ProfileList
          profiles={filtered}
          platform={platform}
          searchQuery={searchQuery}
          onProfileClick={handleProfileClick}
        />
      </div>

      <div>
        <SelectedProfiles />
      </div>
    </div>
    </Layout>
  );
}
