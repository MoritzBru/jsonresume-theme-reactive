import type { ResumeSchema } from '../../resumeSchema.d.ts';

const Basics = ({ basics }: { basics: ResumeSchema['basics'] }) => (
  <section class="bg-primary-500 p-4 text-white">
    { basics?.image && <img src={basics.image} class="mx-auto w-4/5 border-2 border-white rounded-full" /> }
    { basics?.name && <h1 class="mt-2 text-lg font-bold">{basics.name}</h1> }
    { basics?.label && <h2 class="text-md">{basics.label}</h2> }
    <div class="mt-2 flex flex-col gap-y-1">
      { basics?.location && (
        <div class="flex items-center gap-x-2">
          <div class="i-ph-map-pin-duotone size-4" />
          {[basics.location?.city, basics.location?.region, basics.location?.countryCode].filter(Boolean).join(', ')}
        </div>
      )}
      { basics?.email && (
        <div class="flex items-center gap-x-2">
          <div class="i-ph-envelope-simple-duotone size-4" />
          <a href={`mailto:${basics.email}`}>{basics.email}</a>
        </div>
      )}
      { basics?.phone && (
        <div class="flex items-center gap-x-2">
          <div class="i-ph-phone-duotone size-4" />
          <a href={`tel:${basics.phone.replace(/\D/g, '')}`}>{basics.phone}</a>
        </div>
      )}
      { basics?.url && (
        <div class="flex items-center gap-x-2">
          <div class="i-ph-cursor-duotone size-4" />
          <a href={basics.url}>{new URL(basics.url).hostname.replace('www.', '')}</a>
        </div>
      )}
      { basics?.profiles && (
        basics.profiles.map((profile) => (
          <div class="flex items-center gap-x-2">
            <div class={`i-ph-${profile.network?.toLowerCase()}-logo-duotone size-4`} />
            { profile.url
              ? <a href={profile.url}>{profile.username}</a>
              : profile.username}
          </div>
        ))
      )}
    </div>
  </section>
);

export default Basics;
