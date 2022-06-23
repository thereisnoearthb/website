import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { parse } from 'date-fns';

const eventsDirectory = join(process.cwd(), 'content', 'events');
const petitionsDirectory = join(process.cwd(), 'content', 'petitions');
const blurbsDirectory = join(process.cwd(), 'content', 'blurbs');
const howTosDirectory = join(process.cwd(), 'content', 'howTos');
const videosDirectory = join(process.cwd(), 'content', 'videos');
const camapignsDirectory = join(process.cwd(), 'content', 'campaigns');

export function getEventSlugs() {
  return fs.readdirSync(eventsDirectory);
}

export function getPetitionSlugs() {
  return fs.readdirSync(petitionsDirectory);
}

export function getBlurbSlugs() {
  return fs.readdirSync(blurbsDirectory);
}

export function getHowToSlugs() {
  return fs.readdirSync(howTosDirectory);
}

export function getVideoSlugs() {
  return fs.readdirSync(videosDirectory);
}

export function getCampaignSlugs() {
  return fs.readdirSync(camapignsDirectory);
}

export function getAboutContent(fields = []) {
  const fullPath = join(process.cwd(), 'content', 'about-us.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  fields.forEach((field) => {
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getEventBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(eventsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getPetitionBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(petitionsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getCampaignBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(camapignsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getBlurbBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(blurbsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getHowToBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(howTosDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getVideoBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(videosDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

const parseDate = (date) => {
  return parse(date, 'dd-MM-yyyy', new Date(), {
    locale: 'en-IN',
    addSuffix: true
  });
};

export function getAllEvents(fields = []) {
  const slugs = getEventSlugs();
  const events = slugs
    .map((slug) => getEventBySlug(slug, fields))
    .sort((event1, event2) => (parseDate(event1.date) > parseDate(event2.date) ? -1 : 1));
  return events;
}

export function getAllPetitions(fields = []) {
  const slugs = getPetitionSlugs();
  const petitions = slugs
    .map((slug) => getPetitionBySlug(slug, fields))
    .sort((pet1, pet2) => (parseDate(pet1.date) > parseDate(pet2.date) ? -1 : 1));
  return petitions;
}

export function getAllBlurbs(fields = []) {
  const slugs = getBlurbSlugs();
  const blurbs = slugs
    .map((slug) => getBlurbBySlug(slug, fields))
    .sort((blurb1, blurb2) => (parseDate(blurb1.date) > parseDate(blurb2.date) ? -1 : 1));
  return blurbs;
}

export function getAllHowTos(fields = []) {
  const slugs = getHowToSlugs();
  const howTos = slugs
    .map((slug) => getHowToBySlug(slug, fields))
    .sort((howTo1, howTo2) => (parseDate(howTo1.date) > parseDate(howTo2.date) ? -1 : 1));
  return howTos;
}

export function getAllVideos(fields = []) {
  const slugs = getVideoSlugs();
  const videos = slugs
    .map((slug) => getVideoBySlug(slug, fields))
    .sort((video1, video2) => (parseDate(video1.date) > parseDate(video2.date) ? -1 : 1));
  return videos;
}

export function getAllCampaigns(fields = []) {
  const slugs = getCampaignSlugs();
  const campaigns = slugs
    .map((slug) => getCampaignBySlug(slug, fields))
    .sort((campaign1, campaign2) => (parseDate(campaign1.date) > parseDate(campaign2.date) ? -1 : 1));
  return campaigns;
}
