<?php
declare(strict_types=1);

/** Site settings. Edit here. */
const SOURCE_BASE  = 'https://symhealth.siu.edu.in/';
const ASSET_BASE   = SOURCE_BASE . 'assets/';
const CACHE_DIR    = __DIR__ . '/../cache';
const CACHE_TTL    = 21600;          // seconds a fetched page is reused (6 hours)
const REFRESH_KEY  = 'change-me';    // open any page with ?refresh=change-me to re-fetch it now

function e(string $s): string { return htmlspecialchars($s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'); }

/**
 * Every inner page: slug => [title, path on the source site, optional XPath of the content block].
 * If a page shows extra or missing parts, set the XPath (3rd value) to the exact content container.
 */
function pages(): array
{
    return [
        'about-symbiosis'         => ['About Symbiosis',                         'about-symbiosis',         null],
        'about'                   => ['Symbiosis International University',      'about',                   null],
        'fhbs'                    => ['Faculty of Medical and Health Sciences',   'fhbs',                    null],
        'messages'                => ['Messages',                                'messages',                null],
        'schedule'                => ['Schedule',                                'schedule',                null],
        'how-to-reach'            => ['How to Reach',                            'how-to-reach',            null],
        'venue'                   => ['Venue',                                   'venue',                   null],
        'where-to-stay'           => ['Where to Stay',                           'where-to-stay',           null],
        'about-pune'              => ['About Pune',                              'about-pune',              null],
        'faq'                     => ['FAQs',                                    'faq',                     null],
        'speaker_profile'         => ['Speaker Profiles',                        'speaker_profile',         null],
        'concept'                 => ['Concept Note',                            'concept',                 null],
        'logos'                   => ['Logos',                                   'logos',                   null],
        'call_for_papers'         => ['Call for Papers',                         'call_for_papers',         null],
        'topics'                  => ['Topics',                                  'Topics',                  null],
        'abstract-submission'     => ['Abstract Submission',                     'abstract-submission',     null],
        'registration-fees'       => ['Registration Fees',                       'registration-fees',       null],
        'registration-guidelines' => ['Guidelines to Register',                  'registration-guidelines', null],
        'associates'              => ['Associates',                              'associates',              null],
        'media-partners'          => ['Media Partners',                          'media-partners',          null],
        'photos'                  => ['Photo Gallery',                           'photos',                  null],
        'videos'                  => ['Video Gallery',                           'videos',                  null],
        'contact-us'              => ['Contact Us',                              'contact-us',              null],
    ];
}

/** Main menu: [label, slug | full URL | '#', children]. */
function menu(): array
{
    $pdf = fn(string $f) => ASSET_BASE . 'pdf/' . rawurlencode($f);
    return [
        ['Home', 'index', []],
        ['About Us', '#', [['Symbiosis','about-symbiosis'],['SIU','about'],['FoMHS','fhbs']]],
        ['SYMHEALTH 2026', '#', [['Messages','messages'],['Schedule','schedule'],['How to reach','how-to-reach'],['Venue','venue'],['Where to Stay','where-to-stay'],['About Pune','about-pune'],['FAQs','faq']]],
        ['Speakers', '#', [['Profile','speaker_profile'],['Concept Note','concept'],['Logos','logos']]],
        ['Call for Paper', 'call_for_papers', [['Topics','topics'],['Abstract Submission','abstract-submission']]],
        ['Registration', '#', [['Registration Fees','registration-fees'],['Guidelines to Register','registration-guidelines']]],
        ['Report', '#', [
            ['Connexions 2018', $pdf('Connexions_2018.pdf')],
            ['Symhealth 2018 (4 May)', $pdf('SYMHEALTH 2018 Report_4th May.pdf')],
            ['Symhealth 2018 (5 May)', $pdf('SYMHEALTH 2018 REPORT_5th May.pdf')],
            ['Symhealth 2019', $pdf('SymhealthReport2019.pdf')],
            ['Symhealth 2022 (22 Apr)', $pdf('SYMHEALTH_2022_Report_22nd_April.pdf')],
            ['Symhealth 2022 (23 Apr)', $pdf('SYMHEALTH_2022_Report_23rd_April.pdf')],
            ['Symhealth 2023', $pdf('Rappoteur report SymHealth 2023.docx.pdf')],
            ['Symhealth 2024', $pdf('SYMHEALTH 2024 REPORT.pdf')],
            ['Symhealth 2025', $pdf('SYMHEALTH REPORT2025.pdf')],
        ]],
        ['Sponsorship', '#', [['Associates','associates'],['Media Partner','media-partners']]],
        ['Gallery', '#', [
            ['Photos','photos'],['Videos','videos'],
            ['Symbiosis Health Times 2019', ASSET_BASE . rawurlencode('Final for upload.pdf')],
            ['Symbiosis Health Times 2018', ASSET_BASE . 'SymbiosisHealth2018.pdf'],
            ['Symbiosis Health Times 2017', ASSET_BASE . 'SymbiosisHealthTimesNew.pdf'],
        ]],
        ['Contact Us', 'contact-us', []],
    ];
}

/** Turns a menu target into a link: slug -> slug.php, URL stays, '#' stays. */
function menu_href(string $t): string
{
    if ($t === '#' || str_starts_with($t, 'http')) return $t;
    return $t . '.php';
}
